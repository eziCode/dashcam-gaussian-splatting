#!/usr/bin/env python3
"""Cap extreme Gaussian scales so unsupported regions do not become color fog."""
from __future__ import annotations
import argparse, math
from pathlib import Path
import numpy as np
from plyfile import PlyData

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("source", type=Path); parser.add_argument("output", type=Path)
parser.add_argument("--quantile", type=float, default=0.98)
args = parser.parse_args()
if not 0.5 <= args.quantile <= 1.0: raise ValueError("quantile must be between 0.5 and 1")
ply = PlyData.read(args.source); vertices = ply["vertex"].data
scales = np.column_stack([vertices[f"scale_{index}"] for index in range(3)])
cap = float(np.quantile(np.exp(scales).max(axis=1), args.quantile)); log_cap = math.log(cap)
for index in range(3): vertices[f"scale_{index}"] = np.minimum(vertices[f"scale_{index}"], log_cap)
ply.write(args.output)
print(f"Capped Gaussian radius at {cap:.6f} ({args.quantile:.1%} quantile)")
