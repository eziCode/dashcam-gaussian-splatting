#!/usr/bin/env python3
"""Add a soft, locally color-averaged splat layer behind sparse geometry."""

from __future__ import annotations

import argparse
import json
import math
from pathlib import Path

import numpy as np
from plyfile import PlyData, PlyElement
from scipy.spatial import cKDTree


def arguments() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("input", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--neighbors", type=int, default=12)
    parser.add_argument("--scale", type=float, default=2.35, help="Filler scale relative to trained splats")
    parser.add_argument("--opacity", type=float, default=0.16, help="Linear filler opacity")
    return parser.parse_args()


def main() -> None:
    args = arguments()
    if args.output.exists():
        raise ValueError(f"output already exists: {args.output}")
    if args.neighbors < 2 or args.scale <= 1 or not 0 < args.opacity < 1:
        raise ValueError("neighbors >= 2, scale > 1, and 0 < opacity < 1 are required")

    ply = PlyData.read(args.input)
    source = ply["vertex"].data
    names = source.dtype.names or ()
    required = {"x", "y", "z", "f_dc_0", "f_dc_1", "f_dc_2", "opacity",
                "scale_0", "scale_1", "scale_2"}
    if not required.issubset(names):
        raise ValueError("input is not a standard Gaussian-splat PLY")

    points = np.column_stack((source["x"], source["y"], source["z"])).astype(np.float64)
    colors = np.column_stack((source["f_dc_0"], source["f_dc_1"], source["f_dc_2"])).astype(np.float64)
    distances, indices = cKDTree(points).query(points, k=min(args.neighbors + 1, len(points)), workers=-1)
    distances, indices = distances[:, 1:], indices[:, 1:]

    # Weight nearby samples strongly, but use enough neighbors to avoid copying
    # isolated noisy colors into a large filler splat.
    local_scale = np.maximum(np.median(distances, axis=1, keepdims=True), 1e-6)
    weights = np.exp(-0.5 * (distances / local_scale) ** 2)
    weights /= np.maximum(weights.sum(axis=1, keepdims=True), 1e-8)
    averaged_colors = np.sum(colors[indices] * weights[..., None], axis=1)

    filler = source.copy()
    for column, name in enumerate(("f_dc_0", "f_dc_1", "f_dc_2")):
        filler[name] = averaged_colors[:, column].astype(filler.dtype[name])
    scale_offset = math.log(args.scale)
    for name in ("scale_0", "scale_1", "scale_2"):
        filler[name] = source[name] + scale_offset
    filler["opacity"] = math.log(args.opacity / (1.0 - args.opacity))

    # Put the crisp trained splats after the underlay. Renderers depth-sort the
    # complete set, while the lower opacity prevents the filler from dominating.
    combined = np.concatenate((filler, source))
    args.output.parent.mkdir(parents=True, exist_ok=True)
    PlyData([PlyElement.describe(combined, "vertex")], text=False).write(args.output)
    print(json.dumps({
        "inputSplats": len(source),
        "fillerSplats": len(filler),
        "outputSplats": len(combined),
        "scale": args.scale,
        "opacity": args.opacity,
        "output": str(args.output.resolve()),
    }, indent=2))


if __name__ == "__main__":
    main()
