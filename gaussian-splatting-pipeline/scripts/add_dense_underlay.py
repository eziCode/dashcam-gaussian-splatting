#!/usr/bin/env python3
"""Align a dense measured splat cloud beneath a compact trained model."""

from __future__ import annotations

import argparse
import json
import math
from pathlib import Path

import numpy as np
from plyfile import PlyData, PlyElement


parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("trained", type=Path)
parser.add_argument("dense", type=Path)
parser.add_argument("output", type=Path)
parser.add_argument("--opacity", type=float, default=0.55)
parser.add_argument("--scale-multiplier", type=float, default=1.15)
args = parser.parse_args()

if args.output.exists():
    raise ValueError(f"output already exists: {args.output}")
if not 0 < args.opacity < 1 or args.scale_multiplier <= 0:
    raise ValueError("opacity must be between 0 and 1 and scale multiplier must be positive")

trained = PlyData.read(args.trained)["vertex"].data
dense = PlyData.read(args.dense)["vertex"].data
if len(dense) < len(trained):
    raise ValueError("dense source must contain at least as many splats as the trained model")

sample_indices = np.linspace(0, len(dense) - 1, len(trained), dtype=np.int64)
dense_sample = np.column_stack((dense["x"][sample_indices], dense["y"][sample_indices], dense["z"][sample_indices])).astype(np.float64)
trained_points = np.column_stack((trained["x"], trained["y"], trained["z"])).astype(np.float64)

# Training preserves point ordering. Fit the scene normalization while averaging
# away the small per-point position changes learned during optimization.
source_center = dense_sample.mean(axis=0)
target_center = trained_points.mean(axis=0)
source_zero = dense_sample - source_center
target_zero = trained_points - target_center
scale = float(np.sum(source_zero * target_zero) / np.sum(source_zero * source_zero))
offset = target_center - source_center * scale

underlay = dense.copy()
for column, name in enumerate(("x", "y", "z")):
    underlay[name] = dense[name] * scale + offset[column]
for name in ("scale_0", "scale_1", "scale_2"):
    underlay[name] = dense[name] + math.log(abs(scale) * args.scale_multiplier)
underlay["opacity"] = math.log(args.opacity / (1 - args.opacity))

combined = np.concatenate((underlay, trained))
args.output.parent.mkdir(parents=True, exist_ok=True)
PlyData([PlyElement.describe(combined, "vertex")], text=False).write(args.output)
print(json.dumps({
    "measuredUnderlay": len(underlay),
    "trainedSplats": len(trained),
    "outputSplats": len(combined),
    "alignmentScale": scale,
    "alignmentOffset": offset.tolist(),
    "output": str(args.output.resolve()),
}, indent=2))
