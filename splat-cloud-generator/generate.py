#!/usr/bin/env python3
"""Convert an iPhone RGB-D capture or colored point cloud into Gaussian PLY.

This is deterministic geometry processing. It does not train or fine-tune a
machine-learning model. Each output Gaussian is initialized from a fused,
voxel-filtered LiDAR sample and oriented to the estimated local surface normal.
"""

from __future__ import annotations

import argparse
import json
import math
import sys
from pathlib import Path

import numpy as np
import open3d as o3d
from PIL import Image
from plyfile import PlyData, PlyElement

SH_C0 = 0.28209479177387814


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("input", type=Path, help="Capture directory, ZIP, or colored PLY point cloud")
    parser.add_argument("output", type=Path, help="Output Gaussian PLY")
    parser.add_argument("--voxel-size", type=float, default=0.025, help="Fusion voxel size in meters")
    parser.add_argument("--frame-stride", type=int, default=2, help="Use every Nth RGB-D frame")
    parser.add_argument("--pixel-stride", type=int, default=3, help="Use every Nth depth pixel")
    parser.add_argument("--min-confidence", type=int, choices=(0, 1, 2), default=1)
    parser.add_argument("--max-depth", type=float, default=8.0, help="Maximum accepted depth in meters")
    parser.add_argument("--max-points", type=int, default=750_000, help="Maximum output Gaussian count")
    parser.add_argument("--opacity", type=float, default=0.82, help="Initial linear opacity")
    return parser.parse_args()


def locate_capture(path: Path) -> Path:
    if path.is_file() and path.suffix.lower() == ".zip":
        import tempfile
        import zipfile

        target = Path(tempfile.mkdtemp(prefix="lidar-capture-"))
        with zipfile.ZipFile(path) as archive:
            archive.extractall(target)
        candidates = [p.parent for p in target.rglob("frames.jsonl")]
        if len(candidates) != 1:
            raise ValueError(f"Expected one frames.jsonl in ZIP, found {len(candidates)}")
        return candidates[0]
    if path.is_dir() and (path / "frames.jsonl").is_file():
        return path
    raise ValueError("Input is not an iPhone capture directory or ZIP")


def load_records(capture: Path) -> list[dict]:
    records = []
    with (capture / "frames.jsonl").open() as handle:
        for line_number, line in enumerate(handle, 1):
            try:
                records.append(json.loads(line))
            except json.JSONDecodeError as error:
                raise ValueError(f"Invalid metadata on line {line_number}: {error}") from error
    if not records:
        raise ValueError("Capture contains no frame metadata")
    return records


def sample_rgb(image_path: Path, u: np.ndarray, v: np.ndarray, original_height: int) -> np.ndarray:
    """Sample the clockwise-rotated JPEG saved by the Swift capture app."""
    image = np.asarray(Image.open(image_path).convert("RGB"))
    x = np.clip(np.rint(original_height - 1 - v).astype(np.int64), 0, image.shape[1] - 1)
    y = np.clip(np.rint(u).astype(np.int64), 0, image.shape[0] - 1)
    return image[y, x].astype(np.float32) / 255.0


def capture_to_cloud(capture: Path, args: argparse.Namespace) -> o3d.geometry.PointCloud:
    world_points: list[np.ndarray] = []
    world_colors: list[np.ndarray] = []
    records = load_records(capture)

    for record in records[:: args.frame_stride]:
        index = int(record["index"])
        stem = f"{index:06d}"
        dw, dh = int(record["depthWidth"]), int(record["depthHeight"])
        depth_path = capture / "depth" / f"{stem}.bin"
        confidence_path = capture / "confidence" / f"{stem}.bin"
        image_path = capture / "rgb" / f"{stem}.jpg"
        if not (depth_path.is_file() and confidence_path.is_file() and image_path.is_file()):
            continue

        depth = np.fromfile(depth_path, dtype="<f4")
        confidence = np.fromfile(confidence_path, dtype=np.uint8)
        if depth.size != dw * dh or confidence.size != dw * dh:
            continue
        depth = depth.reshape(dh, dw)
        confidence = confidence.reshape(dh, dw)

        yy, xx = np.mgrid[0:dh:args.pixel_stride, 0:dw:args.pixel_stride]
        z = depth[yy, xx]
        conf = confidence[yy, xx]
        valid = np.isfinite(z) & (z > 0.12) & (z <= args.max_depth) & (conf >= args.min_confidence)
        if not np.any(valid):
            continue
        x_depth, y_depth, z = xx[valid].astype(np.float32), yy[valid].astype(np.float32), z[valid]

        iw, ih = int(record["imageWidth"]), int(record["imageHeight"])
        u = (x_depth + 0.5) * iw / dw
        v = (y_depth + 0.5) * ih / dh
        k = np.asarray(record["intrinsics"], dtype=np.float32).reshape((3, 3), order="F")
        camera = np.column_stack(((u - k[0, 2]) * z / k[0, 0], -(v - k[1, 2]) * z / k[1, 1], -z, np.ones_like(z)))
        transform = np.asarray(record["cameraTransform"], dtype=np.float32).reshape((4, 4), order="F")
        world = (transform @ camera.T).T[:, :3]
        color = sample_rgb(image_path, u, v, ih)
        world_points.append(world)
        world_colors.append(color)

    if not world_points:
        raise ValueError("No valid RGB-D samples were found")
    cloud = o3d.geometry.PointCloud()
    cloud.points = o3d.utility.Vector3dVector(np.concatenate(world_points).astype(np.float64))
    cloud.colors = o3d.utility.Vector3dVector(np.concatenate(world_colors).astype(np.float64))
    return cloud


def load_point_cloud(path: Path) -> o3d.geometry.PointCloud:
    cloud = o3d.io.read_point_cloud(str(path))
    if cloud.is_empty():
        raise ValueError(f"Open3D could not read points from {path}")
    if not cloud.has_colors():
        cloud.paint_uniform_color((0.65, 0.65, 0.65))
    return cloud


def quaternion_from_z(normals: np.ndarray) -> np.ndarray:
    """Return scalar-first quaternions rotating local +Z onto each normal."""
    normals = normals / np.maximum(np.linalg.norm(normals, axis=1, keepdims=True), 1e-8)
    dot = np.clip(normals[:, 2], -1.0, 1.0)
    cross = np.column_stack((-normals[:, 1], normals[:, 0], np.zeros(len(normals))))
    quat = np.column_stack((1.0 + dot, cross))
    opposite = dot < -0.9999
    quat[opposite] = np.array([0.0, 1.0, 0.0, 0.0])
    quat /= np.maximum(np.linalg.norm(quat, axis=1, keepdims=True), 1e-8)
    return quat.astype(np.float32)


def prepare_gaussians(cloud: o3d.geometry.PointCloud, args: argparse.Namespace) -> tuple[np.ndarray, ...]:
    cloud = cloud.voxel_down_sample(args.voxel_size)
    cloud, _ = cloud.remove_statistical_outlier(nb_neighbors=16, std_ratio=2.5)
    if len(cloud.points) > args.max_points:
        indices = np.linspace(0, len(cloud.points) - 1, args.max_points, dtype=np.int64)
        cloud = cloud.select_by_index(indices.tolist())
    cloud.estimate_normals(o3d.geometry.KDTreeSearchParamHybrid(radius=args.voxel_size * 4, max_nn=32))
    points = np.asarray(cloud.points, dtype=np.float32)
    colors = np.clip(np.asarray(cloud.colors, dtype=np.float32), 0, 1)
    normals = np.asarray(cloud.normals, dtype=np.float32)
    if not len(points):
        raise ValueError("No points remain after filtering")

    distances = np.asarray(cloud.compute_nearest_neighbor_distance(), dtype=np.float32)
    radius = np.clip(distances * 0.85, args.voxel_size * 0.35, args.voxel_size * 2.0)
    scales = np.log(np.column_stack((radius, radius, np.maximum(radius * 0.22, 0.0015)))).astype(np.float32)
    rotations = quaternion_from_z(normals)
    sh = ((colors - 0.5) / SH_C0).astype(np.float32)
    opacity = np.full(len(points), math.log(args.opacity / (1.0 - args.opacity)), dtype=np.float32)
    return points, normals, sh, opacity, scales, rotations


def write_gaussian_ply(output: Path, values: tuple[np.ndarray, ...]) -> None:
    points, normals, sh, opacity, scales, rotations = values
    fields = [(name, "<f4") for name in (
        "x", "y", "z", "nx", "ny", "nz", "f_dc_0", "f_dc_1", "f_dc_2",
        "opacity", "scale_0", "scale_1", "scale_2", "rot_0", "rot_1", "rot_2", "rot_3",
    )]
    vertices = np.empty(len(points), dtype=fields)
    columns = np.column_stack((points, normals, sh, opacity, scales, rotations))
    for column, name in enumerate(vertices.dtype.names):
        vertices[name] = columns[:, column]
    output.parent.mkdir(parents=True, exist_ok=True)
    PlyData([PlyElement.describe(vertices, "vertex")], text=False).write(str(output))


def main() -> int:
    args = parse_args()
    if args.frame_stride < 1 or args.pixel_stride < 1 or args.voxel_size <= 0:
        raise ValueError("Strides must be positive integers and voxel size must be positive")
    if args.input.suffix.lower() == ".ply":
        cloud = load_point_cloud(args.input)
    else:
        cloud = capture_to_cloud(locate_capture(args.input), args)
    before = len(cloud.points)
    gaussians = prepare_gaussians(cloud, args)
    write_gaussian_ply(args.output, gaussians)
    print(json.dumps({"input_points": before, "output_gaussians": len(gaussians[0]), "output": str(args.output.resolve())}, indent=2))
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except (OSError, ValueError) as error:
        print(f"error: {error}", file=sys.stderr)
        raise SystemExit(2)
