#!/usr/bin/env python3
"""Export normalized COLMAP camera poses for the shared browser viewer."""
from __future__ import annotations
import argparse
import json
import struct
from pathlib import Path
import numpy as np


def rotation(q):
    w, x, y, z = q / np.linalg.norm(q)
    return np.array([
        [1-2*(y*y+z*z), 2*(x*y-w*z), 2*(x*z+w*y)],
        [2*(x*y+w*z), 1-2*(x*x+z*z), 2*(y*z-w*x)],
        [2*(x*z-w*y), 2*(y*z+w*x), 1-2*(x*x+y*y)],
    ])


parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("dataset", type=Path)
parser.add_argument("output", type=Path)
parser.add_argument(
    "--radius", type=float, default=0.22,
    help="Navigable radius around measured camera trajectories in normalized scene units",
)
parser.add_argument("--provenance", type=Path, help="Limit navigation to cameras used by accepted VGGT chunks")
args = parser.parse_args()

records = []
with (args.dataset / "sparse" / "0" / "images.bin").open("rb") as handle:
    count = struct.unpack("<Q", handle.read(8))[0]
    for _ in range(count):
        values = struct.unpack("<idddddddi", handle.read(64))
        name = bytearray()
        while (character := handle.read(1)) != b"\0": name.extend(character)
        points = struct.unpack("<Q", handle.read(8))[0]; handle.seek(points * 24, 1)
        world_to_camera = rotation(np.asarray(values[1:5])); camera_to_world = world_to_camera.T
        translation = np.asarray(values[5:8]); center = -camera_to_world @ translation
        records.append((name.decode(), center, camera_to_world[:, 2], -camera_to_world[:, 1]))

centers = np.asarray([record[1] for record in records])
centroid = centers.mean(0); scale = 1.0 / (np.linalg.norm(centers-centroid, axis=1).mean()+1e-6)
if args.provenance and args.provenance.is_file():
    provenance = json.loads(args.provenance.read_text())
    accepted = {
        name for chunk in provenance.get("chunks", []) if not chunk.get("rejected")
        for name in chunk.get("images", [])
    }
    records = [record for record in records if record[0] in accepted]
    if not records:
        raise SystemExit("Provenance did not contain any accepted camera views")
flip = np.array([1.0, -1.0, -1.0])
records.sort(key=lambda record: record[0])
payload = {
    "centers": [(((center-centroid)*scale)*flip).tolist() for _, center, _, _ in records],
    "forwards": [(forward*flip).tolist() for _, _, forward, _ in records],
    "ups": [(up*flip).tolist() for _, _, _, up in records],
    "names": [name for name, *_ in records],
    "radius": args.radius,
}
args.output.parent.mkdir(parents=True, exist_ok=True)
args.output.write_text(json.dumps(payload, separators=(",", ":"))+"\n")
print(f"Exported {len(records)} camera poses")
