#!/usr/bin/env python3
"""Create a COLMAP text model from CooperScene RGB calibration and platform poses."""

from __future__ import annotations

import argparse
import json
import math
import sqlite3
from pathlib import Path

import numpy as np


# Official CooperScene front-camera calibration. These transforms map the
# vehicle sensor-platform frame to the optical CV frame (right, down, forward).
CALIBRATION = {
    "1": {
        "intrinsic": (1810.6983377214349, 1808.4746114412712, 970.0037900558976, 526.7243033929532),
        "platform2camera": (
            (1.97675856e-02, -9.98998871e-01, -4.01310140e-02, -1.14236290e-04),
            (-4.47204289e-02, 3.92152089e-02, -9.98229558e-01, -1.75248879e-01),
            (9.98803948e-01, 2.15272644e-02, -4.39004680e-02, -5.25987245e-02),
            (0.0, 0.0, 0.0, 1.0),
        ),
    },
    "2": {
        "intrinsic": (1807.294188309111, 1805.1344921703185, 959.1274184107824, 562.0235332672737),
        "platform2camera": (
            (0.00383388, -0.99998521, -0.00385735, -0.0013977),
            (-0.00271154, 0.00384697, -0.99998892, -0.23015363),
            (0.99998897, 0.0038443, -0.00269675, -0.07767752),
            (0.0, 0.0, 0.0, 1.0),
        ),
    },
    "3": {
        "intrinsic": (1814.1641900346326, 1812.1352460466578, 951.718698093622, 568.1954332460546),
        "platform2camera": (
            (0.064023, -0.99792386, -0.00700149, -0.00332843),
            (-0.01444825, 0.00608825, -0.99987708, -0.26612881),
            (0.99784383, 0.06411629, -0.01402846, -0.0864176),
            (0.0, 0.0, 0.0, 1.0),
        ),
    },
}


def pose_to_world(pose: list[float]) -> np.ndarray:
    """Match CooperScene/OpenCOOD [x,y,z,roll,yaw,pitch] convention."""
    x, y, z, roll, yaw, pitch = pose
    roll, yaw, pitch = map(math.radians, (roll, yaw, pitch))
    cy, sy = math.cos(yaw), math.sin(yaw)
    cr, sr = math.cos(roll), math.sin(roll)
    cp, sp = math.cos(pitch), math.sin(pitch)
    rotation = np.array([
        [cp * cy, cy * sp * sr - sy * cr, -cy * sp * cr - sy * sr],
        [sy * cp, sy * sp * sr + cy * cr, -sy * sp * cr + cy * sr],
        [sp, -cp * sr, cp * cr],
    ])
    transform = np.eye(4)
    transform[:3, :3] = rotation
    transform[:3, 3] = (x, y, z)
    return transform


def rotation_to_quaternion(rotation: np.ndarray) -> tuple[float, float, float, float]:
    """Return COLMAP's scalar-first quaternion for a world-to-camera matrix."""
    trace = float(np.trace(rotation))
    if trace > 0:
        s = math.sqrt(trace + 1.0) * 2
        qw = 0.25 * s
        qx = (rotation[2, 1] - rotation[1, 2]) / s
        qy = (rotation[0, 2] - rotation[2, 0]) / s
        qz = (rotation[1, 0] - rotation[0, 1]) / s
    else:
        index = int(np.argmax(np.diag(rotation)))
        if index == 0:
            s = math.sqrt(1.0 + rotation[0, 0] - rotation[1, 1] - rotation[2, 2]) * 2
            qw, qx = (rotation[2, 1] - rotation[1, 2]) / s, 0.25 * s
            qy, qz = (rotation[0, 1] + rotation[1, 0]) / s, (rotation[0, 2] + rotation[2, 0]) / s
        elif index == 1:
            s = math.sqrt(1.0 + rotation[1, 1] - rotation[0, 0] - rotation[2, 2]) * 2
            qw, qy = (rotation[0, 2] - rotation[2, 0]) / s, 0.25 * s
            qx, qz = (rotation[0, 1] + rotation[1, 0]) / s, (rotation[1, 2] + rotation[2, 1]) / s
        else:
            s = math.sqrt(1.0 + rotation[2, 2] - rotation[0, 0] - rotation[1, 1]) * 2
            qw, qz = (rotation[1, 0] - rotation[0, 1]) / s, 0.25 * s
            qx, qy = (rotation[0, 2] + rotation[2, 0]) / s, (rotation[1, 2] + rotation[2, 1]) / s
    quaternion = np.array((qw, qx, qy, qz))
    quaternion /= np.linalg.norm(quaternion)
    return tuple(float(value) for value in quaternion)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("manifest", type=Path)
    parser.add_argument("output", type=Path, help="New COLMAP text-model directory")
    parser.add_argument("--database", type=Path, help="Use COLMAP's assigned image IDs from this database")
    args = parser.parse_args()
    if args.output.exists():
        raise ValueError(f"output already exists: {args.output}")

    manifest = json.loads(args.manifest.read_text())
    observations = [observation for step in manifest["timeline"] for observation in step["observations"]]
    unsupported = sorted({item["agent"] for item in observations} - CALIBRATION.keys())
    if unsupported:
        raise ValueError(f"missing RGB calibration for agents: {', '.join(unsupported)}")

    # COLMAP's current ImageReader path uses one camera here. The three rigs'
    # intrinsics differ by under 2%, so use their mean and refine visually.
    intrinsics = np.array([CALIBRATION[item["agent"]]["intrinsic"] for item in observations])
    fx, fy, cx, cy = np.mean(intrinsics, axis=0)
    args.output.mkdir(parents=True)
    (args.output / "cameras.txt").write_text(
        "# CAMERA_ID, MODEL, WIDTH, HEIGHT, PARAMS[]\n"
        f"1 PINHOLE 1920 1200 {fx:.12g} {fy:.12g} {cx:.12g} {cy:.12g}\n"
    )

    database_ids = {}
    if args.database:
        with sqlite3.connect(args.database) as database:
            database_ids = {name: (image_id, camera_id) for image_id, name, camera_id in database.execute(
                "SELECT image_id, name, camera_id FROM images"
            )}
        missing = sorted({item["image"] for item in observations} - database_ids.keys())
        if missing:
            raise ValueError(f"images absent from COLMAP database: {', '.join(missing[:3])}")

    image_lines = ["# IMAGE_ID, QW, QX, QY, QZ, TX, TY, TZ, CAMERA_ID, NAME"]
    for sequence_id, item in enumerate(observations, 1):
        summary = item.get("evaluationGroundTruth") or {}
        pose = summary.get("platformPose")
        if not pose:
            raise ValueError(f"missing platform pose for {item['image']}")
        platform_to_world = pose_to_world(pose)
        platform_to_camera = np.asarray(CALIBRATION[item["agent"]]["platform2camera"])
        world_to_camera = platform_to_camera @ np.linalg.inv(platform_to_world)
        quaternion = rotation_to_quaternion(world_to_camera[:3, :3])
        translation = world_to_camera[:3, 3]
        values = (*quaternion, *map(float, translation))
        image_id, camera_id = database_ids.get(item["image"], (sequence_id, 1))
        image_lines.append(f"{image_id} {' '.join(f'{value:.17g}' for value in values)} {camera_id} {item['image']}")
        image_lines.append("")
    (args.output / "images.txt").write_text("\n".join(image_lines) + "\n")
    (args.output / "points3D.txt").write_text("# Empty; point_triangulator fills this model.\n")
    print(json.dumps({
        "images": len(observations),
        "cameraModel": "PINHOLE",
        "params": [fx, fy, cx, cy],
        "databaseIds": bool(args.database),
    }, indent=2))


if __name__ == "__main__":
    main()
