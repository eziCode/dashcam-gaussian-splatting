#!/usr/bin/env python3
"""Export synchronized dynamic scene state for the VGGT web viewer."""
from __future__ import annotations
import argparse
import json
import sys
from pathlib import Path
import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))
from reconstruct import load_registered_cameras

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("dataset", type=Path)
parser.add_argument("manifest", type=Path)
parser.add_argument("output", type=Path)
args = parser.parse_args()

cameras = load_registered_cameras(args.dataset)
centers = np.asarray([-camera.R.T @ camera.T for camera in cameras])
centroid = centers.mean(0)
scale = 1.0 / (np.linalg.norm(centers - centroid, axis=1).mean() + 1e-6)
flip = np.array([1.0, -1.0, -1.0])
source = json.loads(args.manifest.read_text())
frames = []

for timestep in source["timeline"]:
    objects = {}
    observations = []
    for observation in timestep["observations"]:
        observations.append({
            "agent": str(observation["agent"]),
            "camera": str(observation.get("camera", "0")),
            "image": observation["image"],
        })
        for item in (observation.get("evaluationGroundTruth") or {}).get("objects", []):
            objects.setdefault(str(item["id"]), item)
    exported = []
    for identifier, item in objects.items():
        if not item.get("location") or not item.get("extent"):
            continue
        center = (np.asarray(item["location"], dtype=float) - centroid) * scale * flip
        size = np.asarray(item["extent"], dtype=float) * 2.0 * abs(scale)
        exported.append({
            "id": identifier,
            "center": center.tolist(),
            "size": size.tolist(),
            "yawDegrees": float((item.get("angle") or [0, 0, 0])[1]),
        })
    frames.append({
        "index": int(timestep["index"]),
        "frameId": str(timestep["frameId"]),
        "observations": observations,
        "objects": exported,
    })

payload = {
    "frameCount": len(frames),
    "staticEnvironment": True,
    "dynamicObjects": True,
    "frames": frames,
}
args.output.parent.mkdir(parents=True, exist_ok=True)
args.output.write_text(json.dumps(payload, separators=(",", ":")) + "\n")
print(f"Exported {len(frames)} synchronized timesteps")
