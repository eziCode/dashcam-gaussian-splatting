#!/usr/bin/env python3
"""Create numerically named, deduplicated ViewCrafter input images."""

import argparse
import hashlib
import json
import re
import shutil
from pathlib import Path


EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}


def natural_key(path: Path) -> tuple:
    parts = re.split(r"(\d+)", path.name.lower())
    return tuple(int(part) if part.isdigit() else part for part in parts)


def digest(path: Path) -> str:
    checksum = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            checksum.update(chunk)
    return checksum.hexdigest()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--images", type=Path, default=Path("images_dense"))
    parser.add_argument("--output", type=Path, default=Path("data/viewcrafter/input"))
    parser.add_argument("--stride", type=int, default=1)
    parser.add_argument("--force", action="store_true")
    args = parser.parse_args()

    if args.stride < 1:
        parser.error("--stride must be at least 1")
    if not args.images.is_dir():
        parser.error(f"image directory does not exist: {args.images}")

    candidates = sorted(
        (path for path in args.images.iterdir() if path.suffix.lower() in EXTENSIONS),
        key=natural_key,
    )
    unique = []
    seen = set()
    for path in candidates:
        checksum = digest(path)
        if checksum not in seen:
            seen.add(checksum)
            unique.append((path, checksum))

    selected = unique[:: args.stride]
    if unique and selected[-1] != unique[-1]:
        selected.append(unique[-1])
    if len(selected) < 2:
        parser.error("ViewCrafter requires at least two unique input images")

    if args.output.exists() and any(args.output.iterdir()) and not args.force:
        parser.error(f"output is not empty: {args.output}; pass --force to replace generated files")
    args.output.mkdir(parents=True, exist_ok=True)
    if args.force:
        for path in args.output.iterdir():
            if path.is_file() or path.is_symlink():
                path.unlink()

    manifest = []
    for index, (source, checksum) in enumerate(selected):
        destination = args.output / f"{index:04d}{source.suffix.lower()}"
        shutil.copy2(source, destination)
        manifest.append(
            {
                "index": index,
                "source": str(source.resolve()),
                "file": destination.name,
                "sha256": checksum,
            }
        )

    metadata = {
        "source_count": len(candidates),
        "unique_count": len(unique),
        "stride": args.stride,
        "selected_count": len(selected),
        "expected_generated_frames": (len(selected) - 1) * 25,
        "images": manifest,
    }
    (args.output.parent / "input_manifest.json").write_text(json.dumps(metadata, indent=2) + "\n")
    print(json.dumps(metadata, indent=2))


if __name__ == "__main__":
    main()
