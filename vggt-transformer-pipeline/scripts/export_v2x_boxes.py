#!/usr/bin/env python3
"""Export one static V2X-Real vehicle-box overlay for the shared viewer."""

from __future__ import annotations

import argparse
import json
from pathlib import Path

import numpy as np
import yaml


parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("dataset", type=Path, help="Prepared dataset containing cameras.json")
parser.add_argument("output", type=Path)
parser.add_argument("--frame", help="Six-digit source frame; defaults to the middle captured frame")
parser.add_argument("--scene", type=Path, help="Reconstructed PLY used to snap boxes to local road height")
args = parser.parse_args()

manifest = json.loads((args.dataset / "cameras.json").read_text())
records = manifest["records"]
centers = np.asarray([record["center"] for record in records], dtype=float)
centroid = centers.mean(0)
scale = 1.0 / (np.linalg.norm(centers - centroid, axis=1).mean() + 1e-6)
flip = np.array([1.0, -1.0, -1.0])
frames = sorted({int(record["timestep"]) for record in records})
frame = int(args.frame) if args.frame is not None else frames[len(frames) // 2]

objects = {}
observations = []
for record in records:
    if int(record["timestep"]) != frame:
        continue
    observations.append({
        "agent": str(record["sourceAgent"]),
        "camera": str(record["camera"]),
        "image": record["image"],
    })
    metadata = yaml.safe_load(Path(record["sourceMetadata"]).read_text())
    for identifier, item in (metadata.get("vehicles") or {}).items():
        objects.setdefault(str(identifier), item)

exported = []
scene_points = None
if args.scene and args.scene.is_file():
    from plyfile import PlyData
    vertices = PlyData.read(args.scene)["vertex"].data
    scene_points = np.column_stack([vertices[axis] for axis in ("x", "y", "z")])
for identifier, item in objects.items():
    if not item.get("location") or not item.get("extent"):
        continue
    raw_center = (np.asarray(item["location"], dtype=float) - centroid) * scale
    half_size = np.asarray(item["extent"], dtype=float) * abs(scale)
    adjusted = False
    if scene_points is not None:
        expected_ground = raw_center[2] - half_size[2]
        horizontal = np.linalg.norm(scene_points[:, :2] - raw_center[:2], axis=1)
        vertical = np.abs(scene_points[:, 2] - expected_ground)
        candidates = scene_points[(horizontal < 0.035) & (vertical < 0.05), 2]
        if len(candidates) >= 12:
            # The closest height mode to the annotated road contact rejects
            # façades/trees while compensating residual monocular depth bias.
            bins = np.linspace(expected_ground - 0.05, expected_ground + 0.05, 41)
            counts, edges = np.histogram(candidates, bins=bins)
            peak = int(np.argmax(counts))
            in_peak = candidates[(candidates >= edges[peak]) & (candidates <= edges[peak + 1])]
            ground = float(np.median(in_peak)) if len(in_peak) else expected_ground
            raw_center[2] = ground + half_size[2]
            adjusted = True
        if not adjusted:
            # Do not show an annotation where the camera-only reconstruction
            # has no nearby road support; its apparent altitude would be
            # arbitrary and can misleadingly place it above/below the scene.
            continue
    center = raw_center * flip
    size = half_size * 2.0
    exported.append({
        "id": identifier,
        "center": center.tolist(),
        "size": size.tolist(),
        "yawDegrees": float((item.get("angle") or [0, 0, 0])[1]),
        "type": item.get("obj_type", "vehicle"),
        "groundAdjusted": adjusted,
    })

payload = {
    "frameCount": 1,
    "staticEnvironment": True,
    "dynamicObjects": False,
    "frames": [{"index": 0, "frameId": f"{frame:06d}", "observations": observations, "objects": exported}],
}
args.output.parent.mkdir(parents=True, exist_ok=True)
args.output.write_text(json.dumps(payload, separators=(",", ":")) + "\n")
adjusted_count = sum(bool(item["groundAdjusted"]) for item in exported)
print(f"Exported {len(exported)} static vehicle boxes from V2X frame {frame:06d}; "
      f"snapped {adjusted_count} to reconstructed road height")
