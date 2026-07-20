#!/usr/bin/env python3
"""Extract an iPhone capture into images and calibration for Mac reconstruction."""

from __future__ import annotations

import argparse
import json
import shutil
import statistics
import tempfile
import zipfile
from pathlib import Path


def arguments() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("capture", type=Path, help="Exported capture ZIP or capture directory")
    parser.add_argument("output", type=Path, help="New output directory")
    parser.add_argument(
        "--additional-capture",
        action="append",
        default=[],
        type=Path,
        help="Additional overlapping capture; may be repeated",
    )
    parser.add_argument("--stride", type=int, default=3, help="Keep every Nth recorded frame")
    parser.add_argument("--max-frames", type=int, default=400, help="Maximum number of exported images")
    return parser.parse_args()


def find_capture(path: Path, temporary: Path) -> Path:
    if path.is_dir() and (path / "frames.jsonl").is_file():
        return path
    if not path.is_file() or path.suffix.lower() != ".zip":
        raise ValueError("capture must be a capture directory or ZIP")
    with zipfile.ZipFile(path) as archive:
        for member in archive.infolist():
            destination = (temporary / member.filename).resolve()
            if temporary.resolve() not in destination.parents and destination != temporary.resolve():
                raise ValueError("capture ZIP contains an unsafe path")
        archive.extractall(temporary)
    matches = list(temporary.rglob("frames.jsonl"))
    if len(matches) != 1:
        raise ValueError(f"expected one frames.jsonl in capture, found {len(matches)}")
    return matches[0].parent


def rotated_intrinsics(record: dict) -> list[float]:
    """Transform ARKit intrinsics for the clockwise-oriented JPEG on disk."""
    matrix = [float(value) for value in record["intrinsics"]]
    height = int(record["imageHeight"])
    # Swift stores the 3x3 matrix column-first: fx=0, fy=4, cx=6, cy=7.
    return [matrix[4], matrix[0], height - 1 - matrix[7], matrix[6]]


def main() -> None:
    args = arguments()
    if args.stride < 1 or args.max_frames < 3:
        raise ValueError("stride must be positive and max-frames must be at least 3")
    if args.output.exists():
        raise ValueError(f"output already exists: {args.output}")

    captures = [args.capture, *args.additional_capture]
    with tempfile.TemporaryDirectory(prefix="iphone-rgb-") as temp_name:
        images = args.output / "images"
        images.mkdir(parents=True)
        exported = []
        for capture_index, capture_path in enumerate(captures):
            extraction = Path(temp_name) / f"capture_{capture_index:02d}"
            extraction.mkdir()
            capture = find_capture(capture_path.resolve(), extraction)
            records = [json.loads(line) for line in (capture / "frames.jsonl").read_text().splitlines() if line.strip()]
            selected = records[:: args.stride][: args.max_frames]
            if len(selected) < 3:
                raise ValueError(f"capture does not contain at least three usable selected frames: {capture_path}")

            for output_index, record in enumerate(selected):
                source = capture / "rgb" / f'{int(record["index"]):06d}.jpg'
                if not source.is_file():
                    continue
                name = f"capture_{capture_index:02d}_frame_{output_index:06d}.jpg"
                shutil.copy2(source, images / name)
                exported.append({
                    "image": name,
                    "capture": capture_index,
                    "source": str(capture_path.resolve()),
                    "sourceIndex": int(record["index"]),
                    "timestamp": float(record["timestamp"]),
                    "width": int(record["imageHeight"]),
                    "height": int(record["imageWidth"]),
                    "pinhole": rotated_intrinsics(record),
                    "cameraTransform": record["cameraTransform"],
                })

        if len(exported) < 3:
            shutil.rmtree(args.output)
            raise ValueError("fewer than three selected RGB files exist")
        calibration = [statistics.median(item["pinhole"][column] for item in exported) for column in range(4)]
        manifest = {
            "sources": [str(path.resolve()) for path in captures],
            "frameCount": len(exported),
            "cameraModel": "PINHOLE",
            "cameraParams": calibration,
            "cameraParamsOrder": ["fx", "fy", "cx", "cy"],
            "notes": "ARKit poses are retained as priors; COLMAP estimates and refines reconstruction poses.",
            "frames": exported,
        }
        (args.output / "capture_manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")
        print(json.dumps({"images": str(images.resolve()), "frames": len(exported), "cameraParams": calibration}, indent=2))


if __name__ == "__main__":
    main()
