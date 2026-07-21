#!/usr/bin/env python3
"""Non-destructively clean a trained PLY for interactive viewing."""
from __future__ import annotations
import argparse, math
from pathlib import Path
import numpy as np
from plyfile import PlyData, PlyElement

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("source", type=Path); parser.add_argument("output", type=Path)
parser.add_argument("--quantile", type=float, default=0.98)
parser.add_argument("--min-opacity", type=float, default=0.0)
parser.add_argument("--drop-radius-multiple", type=float, default=0.0,
                    help="Drop splats this many times larger than the cap; 0 disables dropping")
args = parser.parse_args()
if not 0.5 <= args.quantile <= 1.0: raise ValueError("quantile must be between 0.5 and 1")
if not 0.0 <= args.min_opacity < 1.0: raise ValueError("min-opacity must be in [0, 1)")
ply = PlyData.read(args.source); vertices = ply["vertex"].data
scales = np.column_stack([vertices[f"scale_{index}"] for index in range(3)])
radius = np.exp(scales).max(axis=1)
cap = float(np.quantile(radius, args.quantile)); log_cap = math.log(cap)
opacity = 1.0 / (1.0 + np.exp(-vertices["opacity"]))
keep = np.isfinite(radius) & (opacity >= args.min_opacity)
if args.drop_radius_multiple > 0:
    keep &= radius <= cap * args.drop_radius_multiple
removed = int((~keep).sum())
vertices = vertices[keep].copy()
for index in range(3): vertices[f"scale_{index}"] = np.minimum(vertices[f"scale_{index}"], log_cap)
PlyData([PlyElement.describe(vertices, "vertex")], text=ply.text, byte_order=ply.byte_order).write(args.output)
print(f"Capped Gaussian radius at {cap:.6f} ({args.quantile:.1%} quantile); removed {removed:,} unsupported splats")
