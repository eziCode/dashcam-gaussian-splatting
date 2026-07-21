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
        "type": item.get("obj_type", "vehicle"),
    })

payload = {
    "frameCount": 1,
    "staticEnvironment": True,
    "dynamicObjects": False,
    "frames": [{"index": 0, "frameId": f"{frame:06d}", "observations": observations, "objects": exported}],
}
args.output.parent.mkdir(parents=True, exist_ok=True)
args.output.write_text(json.dumps(payload, separators=(",", ":")) + "\n")
print(f"Exported {len(exported)} static vehicle boxes from V2X frame {frame:06d}")
