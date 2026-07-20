#!/usr/bin/env python3
"""Build a splat-apple dataset from registered ARKit captures and a Gaussian PLY."""

from __future__ import annotations

import argparse
import json
import shutil
import struct
from pathlib import Path

import numpy as np
from plyfile import PlyData

SH_C0 = 0.28209479177387814


def arguments() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("manifest", type=Path, help="Combined capture_manifest.json")
    parser.add_argument("registration", type=Path, help="Open3D registration JSON")
    parser.add_argument("points", type=Path, help="Registered Gaussian PLY used for initialization")
    parser.add_argument("output", type=Path, help="New output dataset directory")
    parser.add_argument("--max-points", type=int, default=50_000)
    return parser.parse_args()


def rotation_to_quaternion(matrix: np.ndarray) -> np.ndarray:
    trace = np.trace(matrix)
    if trace > 0:
        s = np.sqrt(trace + 1.0) * 2
        quat = np.array([0.25 * s, (matrix[2, 1] - matrix[1, 2]) / s,
                         (matrix[0, 2] - matrix[2, 0]) / s, (matrix[1, 0] - matrix[0, 1]) / s])
    else:
        axis = int(np.argmax(np.diag(matrix)))
        if axis == 0:
            s = np.sqrt(1.0 + matrix[0, 0] - matrix[1, 1] - matrix[2, 2]) * 2
            quat = np.array([(matrix[2, 1] - matrix[1, 2]) / s, 0.25 * s,
                             (matrix[0, 1] + matrix[1, 0]) / s, (matrix[0, 2] + matrix[2, 0]) / s])
        elif axis == 1:
            s = np.sqrt(1.0 + matrix[1, 1] - matrix[0, 0] - matrix[2, 2]) * 2
            quat = np.array([(matrix[0, 2] - matrix[2, 0]) / s,
                             (matrix[0, 1] + matrix[1, 0]) / s, 0.25 * s,
                             (matrix[1, 2] + matrix[2, 1]) / s])
        else:
            s = np.sqrt(1.0 + matrix[2, 2] - matrix[0, 0] - matrix[1, 1]) * 2
            quat = np.array([(matrix[1, 0] - matrix[0, 1]) / s,
                             (matrix[0, 2] + matrix[2, 0]) / s,
                             (matrix[1, 2] + matrix[2, 1]) / s, 0.25 * s])
    return quat / np.linalg.norm(quat)


def load_points(path: Path, maximum: int) -> tuple[np.ndarray, np.ndarray]:
    vertex = PlyData.read(path)["vertex"].data
    if len(vertex) > maximum:
        indices = np.linspace(0, len(vertex) - 1, maximum, dtype=np.int64)
        vertex = vertex[indices]
    xyz = np.column_stack((vertex["x"], vertex["y"], vertex["z"])).astype(np.float64)
    names = vertex.dtype.names or ()
    if all(name in names for name in ("f_dc_0", "f_dc_1", "f_dc_2")):
        sh = np.column_stack((vertex["f_dc_0"], vertex["f_dc_1"], vertex["f_dc_2"]))
        rgb = np.clip((sh * SH_C0 + 0.5) * 255, 0, 255).astype(np.uint8)
    elif all(name in names for name in ("red", "green", "blue")):
        rgb = np.column_stack((vertex["red"], vertex["green"], vertex["blue"])).astype(np.uint8)
    else:
        rgb = np.full((len(vertex), 3), 160, dtype=np.uint8)
    return xyz, rgb


def main() -> None:
    args = arguments()
    if args.output.exists():
        raise ValueError(f"output already exists: {args.output}")
    if args.max_points < 100:
        raise ValueError("max-points must be at least 100")

    manifest = json.loads(args.manifest.read_text())
    registration = json.loads(args.registration.read_text())
    transforms = {str(Path(scan["input"]).resolve()): np.asarray(scan["transform"], dtype=np.float64)
                  for scan in registration["scans"]}
    frames = manifest["frames"]
    fx, fy, cx, cy = map(float, manifest["cameraParams"])

    images_dir = args.output / "images"
    sparse_dir = args.output / "sparse" / "0"
    images_dir.mkdir(parents=True)
    sparse_dir.mkdir(parents=True)

    # The saved JPEG is clockwise-rotated. This proper rotation maps its
    # COLMAP camera axes (right, down, forward) into ARKit axes.
    jpeg_camera_to_arkit = np.array([[0.0, 1.0, 0.0],
                                     [1.0, 0.0, 0.0],
                                     [0.0, 0.0, -1.0]])

    with (sparse_dir / "cameras.bin").open("wb") as handle:
        handle.write(struct.pack("<Q", 1))
        handle.write(struct.pack("<iiQQ4d", 1, 1, int(frames[0]["width"]), int(frames[0]["height"]),
                                 fx, fy, cx, cy))

    with (sparse_dir / "images.bin").open("wb") as handle:
        handle.write(struct.pack("<Q", len(frames)))
        for image_id, frame in enumerate(frames, 1):
            source_root = str(Path(frame["source"]).resolve())
            if source_root not in transforms:
                raise ValueError(f"no registration transform for {source_root}")
            camera_to_local = np.asarray(frame["cameraTransform"], dtype=np.float64).reshape((4, 4), order="F")
            camera_to_world = transforms[source_root] @ camera_to_local
            rotation_camera_to_world = camera_to_world[:3, :3] @ jpeg_camera_to_arkit
            rotation_world_to_camera = rotation_camera_to_world.T
            translation = -rotation_world_to_camera @ camera_to_world[:3, 3]
            quaternion = rotation_to_quaternion(rotation_world_to_camera)
            handle.write(struct.pack("<idddddddi", image_id, *quaternion, *translation, 1))
            handle.write(frame["image"].encode("utf-8") + b"\0")
            handle.write(struct.pack("<Q", 0))
            source_image = args.manifest.parent / "images" / frame["image"]
            shutil.copy2(source_image, images_dir / frame["image"])

    xyz, rgb = load_points(args.points, args.max_points)
    with (sparse_dir / "points3D.bin").open("wb") as handle:
        handle.write(struct.pack("<Q", len(xyz)))
        for point_id, (point, color) in enumerate(zip(xyz, rgb, strict=True), 1):
            handle.write(struct.pack("<QdddBBBdQ", point_id, *point, *color, 0.0, 0))

    print(json.dumps({"output": str(args.output.resolve()), "images": len(frames), "points": len(xyz)}, indent=2))


if __name__ == "__main__":
    main()
