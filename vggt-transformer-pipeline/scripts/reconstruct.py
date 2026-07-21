#!/usr/bin/env python3
"""Reconstruct dense RGB geometry with VGGT on Apple Silicon.

VGGT predicts depth and cameras feed-forward.  Small overlapping chunks are
aligned to the existing calibrated COLMAP camera centers, dynamic-object masks
are applied, and the resulting points are voxel fused.  The output PLY stores
compact surfels in the Gaussian PLY schema solely for compatibility with the
existing WebGL viewer; no Gaussian optimization is performed.
"""

from __future__ import annotations

import argparse
import contextlib
import json
import math
import os
import random
import re
import sys
from pathlib import Path

import numpy as np
import torch
from PIL import Image
from plyfile import PlyData, PlyElement


ROOT = Path(__file__).resolve().parents[1]
VGGT_ROOT = ROOT / "third_party" / "vggt"
sys.path.insert(0, str(VGGT_ROOT))

from vggt.models.vggt import VGGT  # noqa: E402
from vggt.utils.geometry import unproject_depth_map_to_point_map  # noqa: E402
from vggt.utils.load_fn import load_and_preprocess_images  # noqa: E402
from vggt.utils.pose_enc import pose_encoding_to_extri_intri  # noqa: E402


TIMESTEP = re.compile(r"^t(\d+)_")
AGENT = re.compile(r"_a(\d+)_")


class CameraInfo:
    def __init__(self, image_name: str, rotation: np.ndarray, translation: np.ndarray):
        self.image_name = image_name
        self.R = rotation
        self.T = translation


def quaternion_to_rotation(q: np.ndarray) -> np.ndarray:
    q = q / np.linalg.norm(q)
    w, x, y, z = q
    return np.array([
        [1 - 2 * (y*y + z*z), 2 * (x*y - w*z), 2 * (x*z + w*y)],
        [2 * (x*y + w*z), 1 - 2 * (x*x + z*z), 2 * (y*z - w*x)],
        [2 * (x*z - w*y), 2 * (y*z + w*x), 1 - 2 * (x*x + y*y)],
    ])


def load_registered_cameras(dataset: Path) -> list[CameraInfo]:
    """Read only the names and poses needed from a COLMAP images.bin file."""
    import struct

    path = dataset / "sparse" / "0" / "images.bin"
    cameras = []
    with path.open("rb") as handle:
        count = struct.unpack("<Q", handle.read(8))[0]
        for _ in range(count):
            values = struct.unpack("<idddddddi", handle.read(64))
            name = bytearray()
            while (character := handle.read(1)) != b"\0":
                name.extend(character)
            points = struct.unpack("<Q", handle.read(8))[0]
            handle.seek(points * 24, 1)
            cameras.append(CameraInfo(name.decode("utf-8"), quaternion_to_rotation(np.asarray(values[1:5])), np.asarray(values[5:8])))
    return cameras


def arguments() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("dataset", type=Path, help="Prepared COLMAP dataset with images and optional masks")
    parser.add_argument("output", type=Path)
    parser.add_argument("--model", default=os.environ.get("VGGT_MODEL", "facebook/VGGT-1B"))
    parser.add_argument("--device", choices=("auto", "mps", "cpu"), default="auto")
    parser.add_argument("--frame-stride", type=int, default=10, help="Use every Nth synchronized timestep")
    parser.add_argument("--timesteps-per-chunk", type=int, default=4, help="Temporal views from one camera per chunk")
    parser.add_argument("--chunk-overlap", type=int, default=2)
    parser.add_argument("--agents", nargs="*", help="Optional CooperScene agent IDs, e.g. --agents 2 3")
    parser.add_argument("--confidence-percentile", type=float, default=55.0)
    parser.add_argument("--pixel-stride", type=int, default=2)
    parser.add_argument("--voxel-size", type=float, default=0.003)
    parser.add_argument("--max-points", type=int, default=1_200_000)
    parser.add_argument("--max-point-distance", type=float, default=6.0,
                        help="Reject inferred points farther than this normalized distance from a source camera")
    parser.add_argument("--max-alignment-rmse", type=float, default=0.35)
    parser.add_argument("--min-camera-span", type=float, default=0.015,
                        help="Reject chunks without enough real camera translation to determine scale")
    parser.add_argument("--seed", type=int, default=42)
    return parser.parse_args()


def camera_centers(infos) -> tuple[dict[str, np.ndarray], dict[str, np.ndarray], np.ndarray, float]:
    centers = {}
    for info in infos:
        centers[info.image_name] = -np.asarray(info.R).T @ np.asarray(info.T)
    all_centers = np.asarray(list(centers.values()))
    centroid = all_centers.mean(0)
    scale = 1.0 / (np.linalg.norm(all_centers - centroid, axis=1).mean() + 1e-6)
    rotations = {info.image_name: np.asarray(info.R) for info in infos}
    return {name: (center - centroid) * scale for name, center in centers.items()}, rotations, centroid, scale


def predicted_centers(extrinsics: np.ndarray) -> np.ndarray:
    return np.stack([-matrix[:3, :3].T @ matrix[:3, 3] for matrix in extrinsics])


def similarity(source: np.ndarray, target: np.ndarray, rotation_hint: np.ndarray | None = None):
    """Return scale, rotation, translation for target ~= s * R @ source + t."""
    source_mean, target_mean = source.mean(0), target.mean(0)
    x, y = source - source_mean, target - target_mean
    if rotation_hint is None:
        covariance = (y.T @ x) / len(x)
        u, singular, vt = np.linalg.svd(covariance)
        sign = np.ones(3)
        if np.linalg.det(u @ vt) < 0:
            sign[-1] = -1
        rotation = u @ np.diag(sign) @ vt
    else:
        # Camera centers are close to collinear for a dashcam. Their positions
        # cannot determine roll about the driving direction, so use the
        # predicted/calibrated camera orientations to fix the world rotation.
        u, _, vt = np.linalg.svd(rotation_hint)
        rotation = u @ vt
        if np.linalg.det(rotation) < 0:
            u[:, -1] *= -1
            rotation = u @ vt
    rotated = x @ rotation.T
    variance = np.sum(rotated * rotated)
    scale = float(np.sum(rotated * y) / max(variance, 1e-9))
    translation = target_mean - scale * (rotation @ source_mean)
    transformed = scale * (source @ rotation.T) + translation
    rmse = float(np.sqrt(np.mean(np.sum((transformed - target) ** 2, axis=1))))
    return scale, rotation, translation, rmse


def preprocess_mask(path: Path, size: int = 518) -> np.ndarray:
    with Image.open(path) as image:
        image = image.convert("L")
        width, height = image.size
        if width >= height:
            new_width = size
            new_height = round(height * size / width / 14) * 14
        else:
            new_height = size
            new_width = round(width * size / height / 14) * 14
        image = image.resize((new_width, new_height), Image.Resampling.NEAREST)
        canvas = Image.new("L", (size, size), 0)
        canvas.paste(image, ((size - new_width) // 2, (size - new_height) // 2))
        return np.asarray(canvas) >= 128


def make_chunks(names: list[str], frame_stride: int, size: int, overlap: int,
                selected_agents: set[str] | None = None) -> list[list[str]]:
    grouped: dict[str, list[tuple[int, str]]] = {}
    for name in names:
        timestep, agent = TIMESTEP.match(Path(name).name), AGENT.search(Path(name).name)
        if timestep and agent and (selected_agents is None or agent.group(1) in selected_agents):
            grouped.setdefault(agent.group(1), []).append((int(timestep.group(1)), name))
    if not grouped:
        selected = names[::frame_stride]
        step = max(1, size - overlap)
        return [selected[index:index + size] for index in range(0, len(selected), step) if selected[index:index + size]]
    step = max(1, size - overlap)
    chunks = []
    for agent in sorted(grouped):
        sequence = [name for _, name in sorted(grouped[agent])][::frame_stride]
        for index in range(0, len(sequence), step):
            chunk = sequence[index:index + size]
            if len(chunk) >= 2:
                chunks.append(chunk)
    return chunks


def inference(model, images: torch.Tensor, device: torch.device):
    autocast = (
        torch.autocast(device_type="mps", dtype=torch.float16)
        if device.type == "mps"
        else contextlib.nullcontext()
    )
    with torch.inference_mode(), autocast:
        tokens, patch_start = model.aggregator(images[None])
        pose = model.camera_head(tokens)[-1]
        depth, confidence = model.depth_head(tokens, images=images[None], patch_start_idx=patch_start)
        extrinsic, intrinsic = pose_encoding_to_extri_intri(pose, images.shape[-2:])
    return (
        extrinsic[0].float().cpu().numpy(),
        intrinsic[0].float().cpu().numpy(),
        depth[0].float().cpu().numpy(),
        confidence[0].float().cpu().numpy(),
    )


def voxel_fuse(points: np.ndarray, colors: np.ndarray, confidence: np.ndarray, voxel: float):
    keys = np.floor(points / voxel).astype(np.int64)
    _, inverse = np.unique(keys, axis=0, return_inverse=True)
    count = np.bincount(inverse).astype(np.float64)
    weight = np.maximum(confidence, 1e-6)
    total_weight = np.bincount(inverse, weights=weight)
    fused_points = np.column_stack([
        np.bincount(inverse, weights=points[:, axis] * weight) / total_weight for axis in range(3)
    ])
    fused_colors = np.column_stack([
        np.bincount(inverse, weights=colors[:, axis] * weight) / total_weight for axis in range(3)
    ])
    fused_confidence = np.bincount(inverse, weights=confidence) / count
    return fused_points.astype(np.float32), fused_colors.astype(np.float32), fused_confidence.astype(np.float32)


def save_surfel_ply(path: Path, points: np.ndarray, colors: np.ndarray, scale: float):
    sh = (np.clip(colors, 0, 1) - 0.5) / 0.28209479177387814
    fields = [
        (name, "f4") for name in (
            "x", "y", "z", "nx", "ny", "nz", "f_dc_0", "f_dc_1", "f_dc_2",
            "opacity", "scale_0", "scale_1", "scale_2", "rot_0", "rot_1", "rot_2", "rot_3",
        )
    ]
    vertices = np.zeros(len(points), dtype=fields)
    for axis, name in enumerate(("x", "y", "z")):
        vertices[name] = points[:, axis]
    for axis, name in enumerate(("f_dc_0", "f_dc_1", "f_dc_2")):
        vertices[name] = sh[:, axis]
    vertices["opacity"] = math.log(0.85 / 0.15)
    for name in ("scale_0", "scale_1", "scale_2"):
        vertices[name] = math.log(scale)
    vertices["rot_0"] = 1.0
    path.parent.mkdir(parents=True, exist_ok=True)
    PlyData([PlyElement.describe(vertices, "vertex")], text=False).write(path)


def main() -> None:
    args = arguments()
    if not VGGT_ROOT.is_dir():
        raise SystemExit("VGGT source is missing; run scripts/setup_vggt_apple.sh")
    if args.frame_stride < 1 or args.timesteps_per_chunk < 1 or args.pixel_stride < 1:
        raise SystemExit("stride and chunk sizes must be positive")
    if not 0 <= args.chunk_overlap < args.timesteps_per_chunk:
        raise SystemExit("chunk overlap must be smaller than timesteps per chunk")
    random.seed(args.seed); np.random.seed(args.seed); torch.manual_seed(args.seed)

    device_name = args.device
    if device_name == "auto":
        device_name = "mps" if torch.backends.mps.is_available() else "cpu"
    device = torch.device(device_name)
    print(f"Loading {args.model} on {device} (first use downloads the checkpoint)")
    try:
        model = VGGT.from_pretrained(args.model).eval().to(device)
    except Exception as error:
        gated = "GatedRepoError" in type(error).__name__ or "gated repo" in str(error).lower() or "401" in str(error)
        if gated and args.model == "facebook/VGGT-1B-Commercial":
            raise SystemExit(
                "\nThe commercial VGGT checkpoint is gated. Complete both steps:\n"
                "  1. Accept access at https://huggingface.co/facebook/VGGT-1B-Commercial\n"
                "  2. Authenticate this environment:\n"
                "     .venv/bin/python -c 'from huggingface_hub import login; login()'\n\n"
                "For non-commercial technical evaluation only, rerun with:\n"
                "  --model facebook/VGGT-1B\n"
            ) from None
        raise
    # These heads are not used and consume substantial unified memory.
    model.point_head = None
    model.track_head = None

    infos = load_registered_cameras(args.dataset)
    if not infos:
        raise SystemExit(f"No registered COLMAP images found in {args.dataset}")
    known_centers, known_rotations, centroid, normalization = camera_centers(infos)
    names = [info.image_name for info in infos if info.image_name in known_centers]
    chunks = make_chunks(
        names, args.frame_stride, args.timesteps_per_chunk, args.chunk_overlap,
        set(args.agents) if args.agents else None,
    )
    if not chunks:
        raise SystemExit("No image chunks were selected")
    print(f"Selected {len(chunks)} chunks from {len(names)} registered images")

    all_points, all_colors, all_confidence, reports = [], [], [], []
    per_chunk_limit = max(20_000, math.ceil(args.max_points * 1.5 / len(chunks)))
    for chunk_index, chunk_names in enumerate(chunks, 1):
        paths = [args.dataset / "images" / name for name in chunk_names]
        print(f"[{chunk_index}/{len(chunks)}] VGGT: {', '.join(chunk_names)}")
        images = load_and_preprocess_images([str(path) for path in paths], mode="pad").to(device)
        extrinsic, intrinsic, depth, confidence = inference(model, images, device)
        points = unproject_depth_map_to_point_map(depth, extrinsic, intrinsic)
        source_centers = predicted_centers(extrinsic)
        target_centers = np.asarray([known_centers[name] for name in chunk_names])
        target_span = float(np.max(np.linalg.norm(target_centers - target_centers.mean(0), axis=1)))
        if target_span < args.min_camera_span:
            reports.append({"images": chunk_names, "cameraSpan": target_span, "points": 0, "rejected": "insufficient parallax"})
            print(f"  rejected chunk: measured camera span {target_span:.4f} < {args.min_camera_span:.4f}")
            del images, depth, confidence
            if device.type == "mps":
                torch.mps.empty_cache()
            continue
        orientation_sum = np.zeros((3, 3))
        for frame, name in enumerate(chunk_names):
            predicted_world_to_camera = extrinsic[frame, :3, :3]
            orientation_sum += known_rotations[name].T @ predicted_world_to_camera
        align_scale, rotation, translation, rmse = similarity(
            source_centers, target_centers, rotation_hint=orientation_sum
        )
        points = align_scale * (points @ rotation.T) + translation
        colors = images.float().cpu().numpy().transpose(0, 2, 3, 1)

        if not np.isfinite(rmse) or rmse > args.max_alignment_rmse:
            reports.append({"images": chunk_names, "alignmentRmse": rmse, "points": 0, "rejected": "alignment"})
            print(f"  rejected chunk: alignment RMSE {rmse:.3f} > {args.max_alignment_rmse:.3f}")
            del images, depth, confidence, points
            if device.type == "mps":
                torch.mps.empty_cache()
            continue

        valid = np.isfinite(points).all(-1) & np.isfinite(confidence) & (depth[..., 0] > 0)
        for frame, name in enumerate(chunk_names):
            frame_valid = valid[frame]
            values = confidence[frame][frame_valid]
            if len(values):
                frame_valid &= confidence[frame] >= np.percentile(values, args.confidence_percentile)
            positive_depth = depth[frame, ..., 0][frame_valid]
            if len(positive_depth):
                low, high = np.percentile(positive_depth, [1, 99])
                frame_valid &= (depth[frame, ..., 0] >= low) & (depth[frame, ..., 0] <= high)
            mask_path = args.dataset / "masks" / name
            if mask_path.is_file():
                frame_valid &= preprocess_mask(mask_path)
            sample_grid = np.zeros_like(frame_valid)
            sample_grid[::args.pixel_stride, ::args.pixel_stride] = True
            valid[frame] = frame_valid & sample_grid

        selected_points = points[valid]
        selected_colors = colors[valid]
        selected_confidence = confidence[valid]
        distance = np.min(
            np.linalg.norm(selected_points[:, None, :] - target_centers[None, :, :], axis=2), axis=1
        )
        near = distance <= args.max_point_distance
        selected_points, selected_colors = selected_points[near], selected_colors[near]
        selected_confidence = selected_confidence[near]
        if not len(selected_points):
            reports.append({"images": chunk_names, "alignmentRmse": rmse, "points": 0, "rejected": "no supported points"})
            print("  rejected chunk: no supported points remained")
            del images, depth, confidence, points
            if device.type == "mps":
                torch.mps.empty_cache()
            continue
        if len(selected_points) > per_chunk_limit:
            choice = np.random.choice(len(selected_points), per_chunk_limit, replace=False)
            selected_points, selected_colors = selected_points[choice], selected_colors[choice]
            selected_confidence = selected_confidence[choice]
        all_points.append(selected_points.astype(np.float32))
        all_colors.append(selected_colors.astype(np.float32))
        all_confidence.append(selected_confidence.astype(np.float32))
        reports.append({"images": chunk_names, "cameraSpan": target_span, "alignmentRmse": rmse, "points": len(selected_points)})
        del images, depth, confidence, points
        if device.type == "mps":
            torch.mps.empty_cache()

    if not all_points:
        raise SystemExit("Every VGGT chunk failed calibrated alignment; try a smaller frame stride or a different agent")
    points = np.concatenate(all_points); colors = np.concatenate(all_colors); confidence = np.concatenate(all_confidence)
    points, colors, confidence = voxel_fuse(points, colors, confidence, args.voxel_size)
    if len(points) > args.max_points:
        # Confidence-weighted random sampling preserves broad coverage while
        # favoring surfaces the model considered reliable.
        probability = confidence / confidence.sum()
        choice = np.random.choice(len(points), args.max_points, replace=False, p=probability)
        points, colors, confidence = points[choice], colors[choice], confidence[choice]
    save_surfel_ply(args.output, points, colors, args.voxel_size * 0.35)
    provenance = {
        "method": "VGGT feed-forward depth and camera transformer; no Gaussian optimization",
        "model": args.model,
        "sourceDataset": str(args.dataset.resolve()),
        "pointCount": len(points),
        "normalization": {"centroid": centroid.tolist(), "scale": normalization},
        "parameters": vars(args) | {"dataset": str(args.dataset), "output": str(args.output)},
        "chunks": reports,
        "warning": "Model-inferred geometry is interpretive and must not be treated as measured accident evidence.",
    }
    args.output.with_suffix(".json").write_text(json.dumps(provenance, indent=2) + "\n")
    print(f"Saved {len(points):,} confidence-filtered transformer surfels to {args.output}")


if __name__ == "__main__":
    main()
