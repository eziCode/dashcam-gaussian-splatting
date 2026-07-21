#!/usr/bin/env python3
"""Generate RGB dynamic-object masks for an existing CooperScene capture."""
from __future__ import annotations
import argparse, json
from pathlib import Path
from prepare_cooperscene_rgb import dynamic_mask

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("manifest", type=Path)
parser.add_argument("output", type=Path)
args = parser.parse_args()
if args.output.exists(): raise ValueError(f"output already exists: {args.output}")
args.output.mkdir(parents=True)
manifest = json.loads(args.manifest.read_text()); images = 0; boxes = 0
for timestep in manifest["timeline"]:
    for observation in timestep["observations"]:
        boxes += dynamic_mask(Path(observation["sourceImage"]), observation["agent"], observation.get("evaluationGroundTruth"), args.output / observation["image"])
        images += 1
print(f"Generated {images} validity masks covering {boxes} projected dynamic boxes")
