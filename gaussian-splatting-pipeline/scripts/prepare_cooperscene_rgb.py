#!/usr/bin/env python3
"""Prepare synchronized CooperScene camera frames for RGB-only reconstruction."""

from __future__ import annotations

import argparse
import json
import os
import shutil
import math
from collections import defaultdict
from pathlib import Path

import numpy as np
import yaml
from PIL import Image, ImageDraw

from create_cooperscene_colmap_priors import CALIBRATION, pose_to_world


def arguments() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("dataset", type=Path, help="CooperScene root containing train/validate/test")
    parser.add_argument("output", type=Path, help="New output directory")
    parser.add_argument("--split", choices=("train", "validate", "test"), default="train")
    parser.add_argument("--take", help="Take directory name; defaults to the first take with RGB")
    parser.add_argument("--agents", nargs="*", help="Camera agents to include; defaults to every RGB agent")
    parser.add_argument("--infrastructure-agent", action="append", default=[], help="Mark an RGB agent as fixed infrastructure")
    parser.add_argument("--stride", type=int, default=1, help="Keep every Nth synchronized timestep")
    parser.add_argument("--max-timesteps", type=int, default=180, help="Maximum synchronized timesteps to export")
    parser.add_argument("--copy", action="store_true", help="Copy images instead of using space-saving hard links")
    return parser.parse_args()


def camera_files(take: Path) -> list[Path]:
    return sorted(path for path in take.glob("*/*_camera*.png") if path.is_file())


def select_take(split: Path, requested: str | None) -> Path:
    if requested:
        take = split / requested
        if not take.is_dir():
            raise ValueError(f"take does not exist: {take}")
        if not camera_files(take):
            raise ValueError(f"take has no RGB camera images: {take}")
        return take
    for take in sorted((path for path in split.iterdir() if path.is_dir()), key=lambda path: path.name):
        if camera_files(take):
            return take
    raise ValueError(f"no take with RGB images found in {split}")


def find_dataset_root(path: Path) -> Path:
    """Accept either the archive root or its nested `mini` dataset directory."""
    path = path.resolve()
    if all((path / split).is_dir() for split in ("train", "validate", "test")):
        return path
    candidates = [
        child for child in path.iterdir() if child.is_dir()
        and all((child / split).is_dir() for split in ("train", "validate", "test"))
    ] if path.is_dir() else []
    if len(candidates) == 1:
        return candidates[0]
    return path


def frame_id(path: Path) -> str:
    return path.name.split("_camera", 1)[0]


def camera_id(path: Path) -> str:
    return path.stem.split("_camera", 1)[1]


def link_or_copy(source: Path, destination: Path, copy: bool) -> str:
    if copy:
        shutil.copy2(source, destination)
        return "copy"
    try:
        os.link(source, destination)
        return "hardlink"
    except OSError:
        shutil.copy2(source, destination)
        return "copy"


def annotation_summary(path: Path) -> dict | None:
    """Keep metric poses/tracks as evaluation metadata, never reconstruction input."""
    if not path.is_file():
        return None
    data = yaml.safe_load(path.read_text()) or {}
    vehicles = data.get("vehicles", {})
    return {
        # The source schema calls this `lidar_pose`, but it is the calibrated
        # six-DoF platform pose. We use it to place the RGB camera rig; no
        # ranges or point-cloud measurements are consumed.
        "platformPose": data.get("lidar_pose"),
        "objects": [
            {
                "id": str(identifier),
                "location": value.get("location"),
                "extent": value.get("extent"),
                "angle": value.get("angle"),
            }
            for identifier, value in vehicles.items()
        ],
    }


def dynamic_mask(image_path: Path, agent: str, summary: dict | None, output: Path) -> int:
    """Project CooperScene's metric 3D vehicle boxes into an RGB validity mask."""
    with Image.open(image_path) as image:
        width, height = image.size
    mask = Image.new("L", (width, height), 255)
    if not summary or agent not in CALIBRATION or not summary.get("platformPose"):
        mask.save(output)
        return 0

    draw = ImageDraw.Draw(mask)
    world_to_platform = np.linalg.inv(pose_to_world(summary["platformPose"]))
    platform_to_camera = np.asarray(CALIBRATION[agent]["platform2camera"])
    fx, fy, cx, cy = CALIBRATION[agent]["intrinsic"]
    count = 0
    for item in summary.get("objects", []):
        if not item.get("location") or not item.get("extent"):
            continue
        center = np.asarray(item["location"], dtype=float)
        extent = np.asarray(item["extent"], dtype=float)
        center_camera = platform_to_camera @ world_to_platform @ np.append(center, 1.0)
        if center_camera[2] <= 1.0:
            continue
        center_u = fx * center_camera[0] / center_camera[2] + cx
        center_v = fy * center_camera[1] / center_camera[2] + cy
        if not (-0.35 * width <= center_u <= 1.35 * width and -0.35 * height <= center_v <= 1.35 * height):
            continue
        yaw = math.radians(float((item.get("angle") or [0, 0, 0])[1]))
        rotation = np.array([[math.cos(yaw), -math.sin(yaw), 0], [math.sin(yaw), math.cos(yaw), 0], [0, 0, 1]])
        corners = []
        for sx in (-1, 1):
            for sy in (-1, 1):
                for sz in (-1, 1):
                    world = center + rotation @ (extent * np.array([sx, sy, sz]))
                    camera = platform_to_camera @ world_to_platform @ np.append(world, 1.0)
                    if camera[2] > 0.1:
                        corners.append((fx * camera[0] / camera[2] + cx, fy * camera[1] / camera[2] + cy))
        if len(corners) < 4:
            continue
        xs, ys = zip(*corners)
        x0, x1, y0, y1 = min(xs), max(xs), min(ys), max(ys)
        if x1 - x0 > 0.85 * width or y1 - y0 > 0.85 * height:
            continue
        margin = max(6.0, 0.08 * max(x1 - x0, y1 - y0))
        box = (max(0, x0 - margin), max(0, y0 - margin), min(width - 1, x1 + margin), min(height - 1, y1 + margin))
        if box[0] < box[2] and box[1] < box[3]:
            draw.rectangle(box, fill=0)
            count += 1
    mask.save(output)
    return count
def main() -> None:
    args = arguments()
    if args.stride < 1 or args.max_timesteps < 2:
        raise ValueError("stride must be positive and max-timesteps must be at least 2")
    if args.output.exists():
        raise ValueError(f"output already exists: {args.output}")

    dataset = find_dataset_root(args.dataset)
    split = dataset / args.split
    if not split.is_dir():
        raise ValueError(f"CooperScene split does not exist: {split}")
    take = select_take(split, args.take)
    selected_agents = set(args.agents or [])
    infrastructure_agents = set(args.infrastructure_agent)

    grouped: dict[str, list[Path]] = defaultdict(list)
    for image in camera_files(take):
        if selected_agents and image.parent.name not in selected_agents:
            continue
        grouped[frame_id(image)].append(image)
    if not grouped:
        raise ValueError("no camera images match the selected agents")

    ordered_ids = sorted(grouped, key=lambda value: int(value) if value.isdigit() else value)
    selected_ids = ordered_ids[:: args.stride][: args.max_timesteps]
    images = args.output / "images"
    masks = args.output / "masks"
    images.mkdir(parents=True)
    masks.mkdir()

    timeline = []
    all_agents: set[str] = set()
    storage_modes: set[str] = set()
    for timestep_index, identifier in enumerate(selected_ids):
        observations = []
        for source in sorted(grouped[identifier], key=lambda path: (path.parent.name, path.name)):
            agent = source.parent.name
            all_agents.add(agent)
            name = f"t{timestep_index:06d}_f{identifier}_a{agent}_c{camera_id(source)}.png"
            storage_modes.add(link_or_copy(source, images / name, args.copy))
            annotation = source.with_name(f"{identifier}.yaml")
            summary = annotation_summary(annotation)
            masked_objects = dynamic_mask(source, agent, summary, masks / name)
            observations.append({
                "agent": agent,
                "role": "infrastructure" if agent in infrastructure_agents else "vehicle",
                "camera": camera_id(source),
                "image": name,
                "sourceImage": str(source),
                "sourceAnnotation": str(annotation) if annotation.is_file() else None,
                "evaluationGroundTruth": summary,
                "validityMask": name,
                "maskedObjectCount": masked_objects,
            })
        timeline.append({
            "index": timestep_index,
            "frameId": identifier,
            "observations": observations,
        })

    manifest = {
        "format": "cooperscene-rgb-v1",
        "dataset": str(dataset),
        "split": args.split,
        "take": take.name,
        "agents": sorted(all_agents),
        "infrastructureAgents": sorted(infrastructure_agents & all_agents),
        "timestepCount": len(timeline),
        "imageCount": sum(len(item["observations"]) for item in timeline),
        "stride": args.stride,
        "storage": sorted(storage_modes),
        "lidarUsed": False,
        "notes": [
            "Only *_camera*.png files are exported; PCD/LiDAR files are never read.",
            "Frame IDs are CooperScene's globally synchronized timestep identifiers.",
            "The core CooperScene release currently has RGB on agents 1-3; agent 0 is LiDAR-only.",
            "Metric platform poses initialize RGB cameras; boxes remain evaluation-only metadata.",
        ],
        "timeline": timeline,
    }
    (args.output / "cooperscene_manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")
    print(json.dumps({key: manifest[key] for key in ("split", "take", "agents", "timestepCount", "imageCount", "lidarUsed")}, indent=2))


if __name__ == "__main__":
    main()
