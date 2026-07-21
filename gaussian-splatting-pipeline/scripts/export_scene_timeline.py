#!/usr/bin/env python3
"""Export normalized CooperScene dynamic tracks for the web viewer."""
from __future__ import annotations
import argparse, json
from pathlib import Path
import numpy as np
from immersive_viewer import load_camera_path_with_transform

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("dataset", type=Path); parser.add_argument("manifest", type=Path); parser.add_argument("output", type=Path)
args = parser.parse_args()
_, _, _, _, centroid, scale = load_camera_path_with_transform(args.dataset)
source = json.loads(args.manifest.read_text()); flip = np.array([1.0, -1.0, -1.0]); frames = []
for timestep in source["timeline"]:
    objects = {}
    for observation in timestep["observations"]:
        for item in (observation.get("evaluationGroundTruth") or {}).get("objects", []): objects.setdefault(item["id"], item)
    exported = []
    for identifier, item in objects.items():
        if not item.get("location") or not item.get("extent"): continue
        center = (np.asarray(item["location"], dtype=float) - centroid) * scale * flip
        size = np.asarray(item["extent"], dtype=float) * 2.0 * abs(scale)
        exported.append({"id": identifier, "center": center.tolist(), "size": size.tolist(), "yawDegrees": float((item.get("angle") or [0, 0, 0])[1])})
    frames.append({"index": timestep["index"], "frameId": timestep["frameId"], "objects": exported})
args.output.parent.mkdir(parents=True, exist_ok=True)
args.output.write_text(json.dumps({"frameCount": len(frames), "frames": frames}, separators=(",", ":")) + "\n")
print(f"Exported {len(frames)} dynamic timesteps to {args.output}")
