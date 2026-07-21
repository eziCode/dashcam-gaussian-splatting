#!/usr/bin/env python3
"""Prepare a camera-only V2X-Real sample for VGGT reconstruction."""

from __future__ import annotations

import argparse
import json
import math
import os
from pathlib import Path

import numpy as np
import yaml


AGENTS = {"1": (1, "vehicle"), "2": (2, "vehicle"), "-1": (3, "infrastructure"), "-2": (4, "infrastructure")}
def rotation_from_rpy(roll: float, yaw: float, pitch: float) -> np.ndarray:
    """OpenCOOD/V2X-Real pose rotation: Rz(yaw) @ Ry(pitch) @ Rx(roll)."""
    roll, yaw, pitch = map(math.radians, (roll, yaw, pitch))
    cr, sr = math.cos(roll), math.sin(roll)
    cy, sy = math.cos(yaw), math.sin(yaw)
    cp, sp = math.cos(pitch), math.sin(pitch)
    return np.array([
        [cy * cp, cy * sp * sr - sy * cr, cy * sp * cr + sy * sr],
        [sy * cp, sy * sp * sr + cy * cr, sy * sp * cr - cy * sr],
        [-sp, cp * sr, cp * cr],
    ])


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("sample", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--camera", default="cam1")
    args = parser.parse_args()

    images = args.output / "images"
    images.mkdir(parents=True, exist_ok=True)
    records = []
    for source_agent, (agent, kind) in AGENTS.items():
        source = args.sample / source_agent
        if not source.is_dir():
            raise SystemExit(f"Missing V2X-Real agent directory: {source}")
        for image_path in sorted(source.glob(f"*_{args.camera}.jpeg")):
            frame = image_path.name[:6]
            metadata_path = source / f"{frame}.yaml"
            metadata = yaml.safe_load(metadata_path.read_text())
            camera = metadata[args.camera]
            platform_pose = list(map(float, metadata.get("true_ego_pose", metadata["lidar_pose"])))
            x, y, z, roll, yaw, pitch = platform_pose
            platform_to_world = rotation_from_rpy(roll, yaw, pitch)
            # V2X-Real stores an optical-camera-to-platform calibration matrix.
            # Compose it with the GPS/IMU platform pose instead of interpreting
            # the lossy camera Euler `cords`, whose convention is ambiguous.
            camera_to_platform = np.asarray(camera["extrinsic"], dtype=np.float64)
            camera_to_world = platform_to_world @ camera_to_platform[:3, :3]
            center = np.asarray([x, y, z]) + platform_to_world @ camera_to_platform[:3, 3]
            world_to_camera = camera_to_world.T
            translation = -world_to_camera @ center
            name = f"t{frame}_a{agent}_c1.jpeg"
            target = images / name
            if target.exists() or target.is_symlink():
                target.unlink()
            target.symlink_to(os.path.relpath(image_path.resolve(), images.resolve()))
            records.append({
                "image": name,
                "timestep": int(frame),
                "agent": agent,
                "sourceAgent": source_agent,
                "agentType": kind,
                "camera": args.camera,
                "rotation": world_to_camera.tolist(),
                "translation": translation.tolist(),
                "center": center.tolist(),
                "intrinsic": camera["intrinsic"],
                "poseSource": "true_ego_pose composed with camera extrinsic",
                "sourceMetadata": str(metadata_path.resolve()),
            })

    records.sort(key=lambda item: (item["timestep"], item["agent"]))
    if not records:
        raise SystemExit("No V2X-Real camera images were found")
    manifest = {
        "format": "v2x-real-camera-only-v1",
        "source": str(args.sample.resolve()),
        "lidarUsed": False,
        "records": records,
    }
    (args.output / "cameras.json").write_text(json.dumps(manifest, indent=2) + "\n")
    print(f"Prepared {len(records)} synchronized camera views in {args.output}")
    print("LiDAR used: no")


if __name__ == "__main__":
    main()
