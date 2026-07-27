#!/usr/bin/env python3
"""Project V2X world-space vehicle boxes into camera validity masks."""

import argparse
import json
import math
from pathlib import Path

import numpy as np
import yaml
from PIL import Image, ImageDraw


def convex_hull(points):
    points = sorted(set(map(tuple, points)))
    if len(points) <= 1:
        return points
    def cross(o, a, b):
        return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])
    lower = []
    for point in points:
        while len(lower) >= 2 and cross(lower[-2], lower[-1], point) <= 0:
            lower.pop()
        lower.append(point)
    upper = []
    for point in reversed(points):
        while len(upper) >= 2 and cross(upper[-2], upper[-1], point) <= 0:
            upper.pop()
        upper.append(point)
    return lower[:-1] + upper[:-1]


def corners(item):
    center = np.asarray(item["location"], dtype=float)
    extent = np.asarray(item["extent"], dtype=float)
    yaw = math.radians(float((item.get("angle") or [0, 0, 0])[1]))
    rotation = np.array([[math.cos(yaw), -math.sin(yaw), 0],
                         [math.sin(yaw), math.cos(yaw), 0], [0, 0, 1]])
    signs = np.asarray([(x, y, z) for x in (-1, 1) for y in (-1, 1) for z in (-1, 1)])
    return center + (signs * extent) @ rotation.T


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("dataset", type=Path)
    parser.add_argument("--padding", type=int, default=6)
    args = parser.parse_args()
    manifest = json.loads((args.dataset / "cameras.json").read_text())
    output = args.dataset / "masks"; output.mkdir(exist_ok=True)
    count = 0
    for record in manifest["records"]:
        image_path = args.dataset / "images" / record["image"]
        with Image.open(image_path) as image:
            width, height = image.size
        valid = Image.new("L", (width, height), 255)
        draw = ImageDraw.Draw(valid)
        metadata_path = Path(record["sourceMetadata"])
        if not metadata_path.is_file():
            frame = f"{int(record['timestep']):06d}"
            metadata_path = image_path.resolve().parent / f"{frame}.yaml"
        metadata = yaml.safe_load(metadata_path.read_text())
        rotation = np.asarray(record["rotation"]); translation = np.asarray(record["translation"])
        intrinsic = np.asarray(record["intrinsic"])
        for item in (metadata.get("vehicles") or {}).values():
            if not item.get("location") or not item.get("extent"):
                continue
            camera = corners(item) @ rotation.T + translation
            visible = camera[:, 2] > 0.05
            if visible.sum() < 3:
                continue
            pixels = camera[visible] @ intrinsic.T
            pixels = pixels[:, :2] / pixels[:, 2:3]
            hull = convex_hull(pixels.tolist())
            if len(hull) >= 3:
                draw.polygon(hull, fill=0)
                if args.padding:
                    draw.line(hull + [hull[0]], fill=0, width=args.padding * 2, joint="curve")
        valid.save(output / record["image"])
        count += 1
    print(f"Saved {count} dynamic-object validity masks to {output}")


if __name__ == "__main__":
    main()
