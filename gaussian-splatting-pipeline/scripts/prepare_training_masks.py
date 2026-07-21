#!/usr/bin/env python3
"""Resize prepared validity masks to COLMAP's undistorted training images."""

from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image


parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("source", type=Path)
parser.add_argument("images", type=Path)
parser.add_argument("output", type=Path)
args = parser.parse_args()
if args.output.exists():
    raise ValueError(f"output already exists: {args.output}")
args.output.mkdir(parents=True)
count = 0
for image_path in sorted(args.images.glob("*")):
    mask_path = args.source / image_path.name
    if not mask_path.is_file():
        continue
    with Image.open(image_path) as image, Image.open(mask_path) as mask:
        mask.convert("L").resize(image.size, Image.Resampling.NEAREST).save(args.output / image_path.name)
    count += 1
print(f"Prepared {count} static-scene validity masks in {args.output}")
