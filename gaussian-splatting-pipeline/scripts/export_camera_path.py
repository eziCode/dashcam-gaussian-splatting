#!/usr/bin/env python3
"""Export normalized COLMAP camera centers for browser-side guided navigation."""

from __future__ import annotations

import argparse
import json
from pathlib import Path

from immersive_viewer import load_camera_path


parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("dataset", type=Path)
parser.add_argument("output", type=Path)
parser.add_argument("--radius", type=float, default=0.45)
args = parser.parse_args()

centers, forwards, ups, _ = load_camera_path(args.dataset)
# The web scene applies a 180-degree X rotation to the PLY.
flip = [1.0, -1.0, -1.0]
payload = {
    "centers": (centers * flip).tolist(),
    "forward": (forwards[0] * flip).tolist(),
    "up": (ups[0] * flip).tolist(),
    "radius": args.radius,
}
args.output.parent.mkdir(parents=True, exist_ok=True)
args.output.write_text(json.dumps(payload, separators=(",", ":")) + "\n")
print(f"Exported {len(centers)} guided camera positions to {args.output}")
