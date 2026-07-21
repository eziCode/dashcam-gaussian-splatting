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
    """Read names and poses from a native manifest or COLMAP images.bin."""
    manifest_path = dataset / "cameras.json"
    if manifest_path.is_file():
        payload = json.loads(manifest_path.read_text())
        return [
            CameraInfo(
                record["image"],
                np.asarray(record["rotation"], dtype=np.float64),
                np.asarray(record["translation"], dtype=np.float64),
            )
            for record in payload["records"]
        ]
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
    parser.add_argument("--chunk-mode", choices=("camera", "timestep"), default="camera",
                        help="Group temporal views per camera or synchronized views across cameras")
    parser.add_argument("--confidence-percentile", type=float, default=55.0)
    parser.add_argument("--pixel-stride", type=int, default=2)
    parser.add_argument("--voxel-size", type=float, default=0.003)
    parser.add_argument("--max-points", type=int, default=1_200_000)
    parser.add_argument("--max-point-distance", type=float, default=6.0,
                        help="Reject inferred points farther than this normalized distance from a source camera")
    parser.add_argument("--max-alignment-rmse", type=float, default=0.35)
    parser.add_argument("--alignment-mode", choices=("similarity", "calibrated-cameras"), default="similarity",
                        help="Align VGGT cameras jointly, or place inferred camera-local depth at supplied poses")
    parser.add_argument("--calibrated-depth-scale", type=float,
                        help="Use one fixed VGGT-to-scene depth scale for every calibrated-camera chunk")
    parser.add_argument("--min-camera-span", type=float, default=0.015,
                        help="Reject chunks without enough real camera translation to determine scale")
    parser.add_argument("--adaptive-anchors", type=int, default=0,
                        help="Add up to N distant same-camera frames when a local chunk lacks baseline")
    parser.add_argument("--min-chunk-support", type=int, default=1,
                        help="Require this many independent chunks to support each coarse region")
    parser.add_argument("--support-voxel-size", type=float, default=0.01)
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


def calibrated_camera_transform(points: np.ndarray, extrinsics: np.ndarray,
                                target_centers: np.ndarray, target_rotations: np.ndarray,
                                fixed_scale: float | None = None):
    """Place VGGT camera-local depth at known RGB camera poses.

    VGGT supplies depth but its camera graph can be unreliable for distant,
    heterogeneous roadside/dashcam views.  V2X-Real already supplies calibrated
    camera poses, so only a robust global depth scale is estimated from camera
    baselines; no LiDAR geometry is involved.
    """
    source_centers = predicted_centers(extrinsics)
    source_distances, target_distances = [], []
    for first in range(len(source_centers)):
        for second in range(first + 1, len(source_centers)):
            source = float(np.linalg.norm(source_centers[first] - source_centers[second]))
            target = float(np.linalg.norm(target_centers[first] - target_centers[second]))
            if source > 1e-5 and target > 1e-5:
                source_distances.append(source)
                target_distances.append(target)
    if not source_distances:
        raise ValueError("VGGT did not predict a usable camera baseline")
    ratios = np.asarray(target_distances) / np.asarray(source_distances)
    measured_scale = float(np.median(ratios))
    scale = fixed_scale if fixed_scale is not None else measured_scale
    relative_error = float(np.median(np.abs(np.asarray(source_distances) * scale - target_distances)
                                     / np.maximum(target_distances, 1e-6)))
    transformed = np.empty_like(points)
    for frame in range(len(points)):
        predicted_rotation = extrinsics[frame, :3, :3]
        predicted_translation = extrinsics[frame, :3, 3]
        camera_local = points[frame] @ predicted_rotation.T + predicted_translation
        # target_rotations are world-to-camera. For row vectors, camera to
        # world is multiplication by that matrix without a transpose.
        transformed[frame] = scale * (camera_local @ target_rotations[frame]) + target_centers[frame]
    return transformed, scale, relative_error, measured_scale


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
                selected_agents: set[str] | None = None, mode: str = "camera") -> list[list[str]]:
    if mode == "timestep":
        by_timestep: dict[int, list[str]] = {}
        for name in names:
            timestep, agent = TIMESTEP.match(Path(name).name), AGENT.search(Path(name).name)
            if timestep and agent and (selected_agents is None or agent.group(1) in selected_agents):
                by_timestep.setdefault(int(timestep.group(1)), []).append(name)
        selected = sorted(by_timestep)[::frame_stride]
        step = max(1, size - overlap)
        chunks = []
        for index in range(0, len(selected), step):
            window = selected[index:index + size]
            chunk = [name for timestep in window for name in sorted(by_timestep[timestep])]
            if len(chunk) >= 2:
                chunks.append(chunk)
        return chunks
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


def add_baseline_anchors(chunks: list[list[str]], all_names: list[str], centers: dict[str, np.ndarray],
                         minimum_span: float, maximum_anchors: int) -> list[list[str]]:
    """Add distant frames from the same camera when local motion cannot establish scale."""
    if maximum_anchors <= 0:
        return chunks
    by_agent: dict[str, list[str]] = {}
    for name in all_names:
        match = AGENT.search(name)
        if match:
            by_agent.setdefault(match.group(1), []).append(name)
    result = []
    for original in chunks:
        chunk = list(original)
        match = AGENT.search(chunk[0])
        candidates = by_agent.get(match.group(1), []) if match else []
        for _ in range(maximum_anchors):
            points = np.asarray([centers[name] for name in chunk])
            span = float(np.max(np.linalg.norm(points - points.mean(0), axis=1)))
            if span >= minimum_span:
                break
            available = [name for name in candidates if name not in chunk]
            if not available:
                break
            center = points.mean(0)
            anchor = max(available, key=lambda name: np.linalg.norm(centers[name] - center))
            chunk.append(anchor)
        result.append(sorted(chunk))
    return result


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


def rotation_matrices_to_quaternions(matrices: np.ndarray) -> np.ndarray:
    """Convert 3x3 matrices to normalized wxyz quaternions."""
    quaternions = np.zeros((len(matrices), 4), dtype=np.float32)
    m = matrices
    trace = m[:, 0, 0] + m[:, 1, 1] + m[:, 2, 2]
    positive = trace > 0
    s = np.sqrt(np.maximum(trace[positive] + 1.0, 1e-12)) * 2
    quaternions[positive, 0] = .25*s
    quaternions[positive, 1] = (m[positive,2,1]-m[positive,1,2])/s
    quaternions[positive, 2] = (m[positive,0,2]-m[positive,2,0])/s
    quaternions[positive, 3] = (m[positive,1,0]-m[positive,0,1])/s
    remaining = ~positive
    for axis in range(3):
        use = remaining & (np.argmax(np.diagonal(m, axis1=1, axis2=2), axis=1) == axis)
        if not np.any(use): continue
        other1, other2 = (axis+1)%3, (axis+2)%3
        s = np.sqrt(np.maximum(1+m[use,axis,axis]-m[use,other1,other1]-m[use,other2,other2], 1e-12))*2
        quaternions[use, axis+1] = .25*s
        quaternions[use, 0] = (m[use,other2,other1]-m[use,other1,other2])/s
        quaternions[use, other1+1] = (m[use,axis,other1]+m[use,other1,axis])/s
        quaternions[use, other2+1] = (m[use,axis,other2]+m[use,other2,axis])/s
    quaternions /= np.maximum(np.linalg.norm(quaternions, axis=1, keepdims=True), 1e-8)
    return quaternions


def surface_attributes(points: np.ndarray, voxel: float):
    """Estimate an oriented elliptical footprint from each depth-map pixel."""
    tangent_x = np.gradient(points, axis=2)
    tangent_y_raw = np.gradient(points, axis=1)
    length_x = np.linalg.norm(tangent_x, axis=-1)
    tangent_x /= np.maximum(length_x[..., None], 1e-8)
    normal = np.cross(tangent_x, tangent_y_raw)
    normal /= np.maximum(np.linalg.norm(normal, axis=-1, keepdims=True), 1e-8)
    tangent_y = np.cross(normal, tangent_x)
    tangent_y /= np.maximum(np.linalg.norm(tangent_y, axis=-1, keepdims=True), 1e-8)
    length_y = np.abs(np.sum(tangent_y_raw * tangent_y, axis=-1))
    # Large depth discontinuities used to create metre-wide surfels that
    # looked like blur streaks. Keep footprints below one fusion voxel; denser
    # sampling supplies coverage instead of oversized translucent ellipses.
    minimum, maximum = voxel * 0.10, voxel * 0.70
    scale_x = np.clip(length_x * 0.42, minimum, maximum)
    scale_y = np.clip(length_y * 0.42, minimum, maximum)
    thickness = np.clip(np.minimum(scale_x, scale_y) * 0.06, voxel * 0.015, voxel * 0.08)
    scales = np.stack([scale_x, scale_y, thickness], axis=-1).astype(np.float32)
    matrices = np.stack([tangent_x, tangent_y, normal], axis=-1).reshape(-1, 3, 3)
    quaternions = rotation_matrices_to_quaternions(matrices).reshape(points.shape[:-1] + (4,))
    return scales, quaternions


def voxel_fuse(points: np.ndarray, colors: np.ndarray, confidence: np.ndarray,
               scales: np.ndarray, quaternions: np.ndarray, voxel: float):
    """Keep the highest-confidence measured observation in each voxel."""
    keys = np.floor(points / voxel).astype(np.int64)
    order = np.lexsort((-confidence, keys[:, 2], keys[:, 1], keys[:, 0]))
    sorted_keys = keys[order]
    first = np.ones(len(order), dtype=bool)
    first[1:] = np.any(sorted_keys[1:] != sorted_keys[:-1], axis=1)
    selected = order[first]
    return points[selected], colors[selected], confidence[selected], scales[selected], quaternions[selected]


def consensus_mask(points: np.ndarray, sources: np.ndarray, voxel: float, minimum_support: int) -> np.ndarray:
    """Keep regions independently supported by multiple reconstruction chunks."""
    if minimum_support <= 1:
        return np.ones(len(points), dtype=bool)
    keys = np.floor(points / voxel).astype(np.int64)
    _, voxel_index = np.unique(keys, axis=0, return_inverse=True)
    source_count = int(sources.max()) + 1
    unique_pairs = np.unique(voxel_index.astype(np.int64) * source_count + sources)
    support = np.bincount(unique_pairs // source_count, minlength=int(voxel_index.max()) + 1)
    return support[voxel_index] >= minimum_support


def save_surfel_ply(path: Path, points: np.ndarray, colors: np.ndarray,
                    scales: np.ndarray, quaternions: np.ndarray):
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
    for axis, name in enumerate(("scale_0", "scale_1", "scale_2")):
        vertices[name] = np.log(np.maximum(scales[:, axis], 1e-7))
    for axis, name in enumerate(("rot_0", "rot_1", "rot_2", "rot_3")):
        vertices[name] = quaternions[:, axis]
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
        args.chunk_mode,
    )
    chunks = add_baseline_anchors(
        chunks, names, known_centers, args.min_camera_span, args.adaptive_anchors
    )
    if not chunks:
        raise SystemExit("No image chunks were selected")
    print(f"Selected {len(chunks)} chunks from {len(names)} registered images")

    all_points, all_colors, all_confidence, all_scales, all_quaternions, all_sources, reports = [], [], [], [], [], [], []
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
        if args.alignment_mode == "calibrated-cameras":
            try:
                points, align_scale, rmse, measured_scale = calibrated_camera_transform(
                    points, extrinsic, target_centers,
                    np.asarray([known_rotations[name] for name in chunk_names]),
                    args.calibrated_depth_scale,
                )
            except ValueError as error:
                reports.append({"images": chunk_names, "points": 0, "rejected": str(error)})
                print(f"  rejected chunk: {error}")
                del images, depth, confidence, points
                if device.type == "mps":
                    torch.mps.empty_cache()
                continue
        else:
            orientation_sum = np.zeros((3, 3))
            for frame, name in enumerate(chunk_names):
                predicted_world_to_camera = extrinsic[frame, :3, :3]
                orientation_sum += known_rotations[name].T @ predicted_world_to_camera
            align_scale, rotation, translation, rmse = similarity(
                source_centers, target_centers, rotation_hint=orientation_sum
            )
            points = align_scale * (points @ rotation.T) + translation
        surfel_scales, surfel_quaternions = surface_attributes(points, args.voxel_size)
        colors = images.float().cpu().numpy().transpose(0, 2, 3, 1)

        if args.alignment_mode == "similarity" and (not np.isfinite(rmse) or rmse > args.max_alignment_rmse):
            reports.append({"images": chunk_names, "alignmentRmse": rmse, "points": 0, "rejected": "alignment"})
            print(f"  rejected chunk: alignment RMSE {rmse:.3f} > {args.max_alignment_rmse:.3f}")
            del images, depth, confidence, points
            if device.type == "mps":
                torch.mps.empty_cache()
            continue
        if args.alignment_mode == "calibrated-cameras":
            print(f"  calibrated RGB poses; depth scale {align_scale:.4f} "
                  f"(measured {measured_scale:.4f}), median baseline error {rmse:.3f}")

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
        selected_scales = surfel_scales[valid]
        selected_quaternions = surfel_quaternions[valid]
        distance = np.min(
            np.linalg.norm(selected_points[:, None, :] - target_centers[None, :, :], axis=2), axis=1
        )
        near = distance <= args.max_point_distance
        selected_points, selected_colors = selected_points[near], selected_colors[near]
        selected_confidence = selected_confidence[near]
        selected_scales, selected_quaternions = selected_scales[near], selected_quaternions[near]
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
            selected_scales, selected_quaternions = selected_scales[choice], selected_quaternions[choice]
        all_points.append(selected_points.astype(np.float32))
        all_colors.append(selected_colors.astype(np.float32))
        all_confidence.append(selected_confidence.astype(np.float32))
        all_scales.append(selected_scales.astype(np.float32))
        all_quaternions.append(selected_quaternions.astype(np.float32))
        all_sources.append(np.full(len(selected_points), chunk_index - 1, dtype=np.int32))
        reports.append({"images": chunk_names, "cameraSpan": target_span, "alignmentRmse": rmse, "points": len(selected_points)})
        del images, depth, confidence, points
        if device.type == "mps":
            torch.mps.empty_cache()

    if not all_points:
        raise SystemExit("Every VGGT chunk failed calibrated alignment; try a smaller frame stride or a different agent")
    points = np.concatenate(all_points); colors = np.concatenate(all_colors); confidence = np.concatenate(all_confidence)
    scales = np.concatenate(all_scales); quaternions = np.concatenate(all_quaternions)
    sources = np.concatenate(all_sources)
    consensus = consensus_mask(points, sources, args.support_voxel_size, args.min_chunk_support)
    consensus_removed = int((~consensus).sum())
    points, colors, confidence = points[consensus], colors[consensus], confidence[consensus]
    scales, quaternions = scales[consensus], quaternions[consensus]
    print(f"Consensus filter removed {consensus_removed:,} candidates unsupported by {args.min_chunk_support} chunks")
    points, colors, confidence, scales, quaternions = voxel_fuse(
        points, colors, confidence, scales, quaternions, args.voxel_size
    )
    if len(points) > args.max_points:
        # Confidence-weighted random sampling preserves broad coverage while
        # favoring surfaces the model considered reliable.
        probability = confidence / confidence.sum()
        choice = np.random.choice(len(points), args.max_points, replace=False, p=probability)
        points, colors, confidence = points[choice], colors[choice], confidence[choice]
        scales, quaternions = scales[choice], quaternions[choice]
    save_surfel_ply(args.output, points, colors, scales, quaternions)
    camera_manifest = args.dataset / "cameras.json"
    camera_manifest_data = json.loads(camera_manifest.read_text()) if camera_manifest.is_file() else {}
    provenance = {
        "method": "VGGT feed-forward depth and camera transformer; no Gaussian optimization",
        "model": args.model,
        "sourceDataset": str(args.dataset.resolve()),
        "lidarUsed": camera_manifest_data.get("lidarUsed", False),
        "pointCount": len(points),
        "normalization": {"centroid": centroid.tolist(), "scale": normalization},
        "parameters": vars(args) | {"dataset": str(args.dataset), "output": str(args.output)},
        "chunks": reports,
        "consensusRemoved": consensus_removed,
        "warning": "Model-inferred geometry is interpretive and must not be treated as measured accident evidence.",
    }
    args.output.with_suffix(".json").write_text(json.dumps(provenance, indent=2) + "\n")
    print(f"Saved {len(points):,} confidence-filtered transformer surfels to {args.output}")


if __name__ == "__main__":
    main()
