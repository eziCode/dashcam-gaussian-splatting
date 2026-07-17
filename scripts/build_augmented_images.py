#!/usr/bin/env python3
"""Combine real and synthesized frames without obscuring their provenance."""

import argparse
import json
import shutil
from pathlib import Path


EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--real", type=Path, default=Path("images_dense"))
    parser.add_argument("--synthetic", type=Path, default=Path("data/viewcrafter/generated"))
    parser.add_argument("--output", type=Path, default=Path("data/viewcrafter/augmented"))
    args = parser.parse_args()

    for path in (args.real, args.synthetic):
        if not path.is_dir():
            parser.error(f"missing image directory: {path}")
    if args.output.exists() and any(args.output.iterdir()):
        parser.error(f"output is not empty: {args.output}")
    args.output.mkdir(parents=True, exist_ok=True)

    manifest = []
    for provenance, directory in (("real", args.real), ("synthetic", args.synthetic)):
        paths = sorted(path for path in directory.iterdir() if path.suffix.lower() in EXTENSIONS)
        for index, source in enumerate(paths):
            destination = args.output / f"{provenance}_{index:06d}{source.suffix.lower()}"
            shutil.copy2(source, destination)
            manifest.append({"file": destination.name, "source": str(source.resolve()), "provenance": provenance})

    counts = {kind: sum(item["provenance"] == kind for item in manifest) for kind in ("real", "synthetic")}
    (args.output.parent / "augmented_manifest.json").write_text(
        json.dumps({"counts": counts, "images": manifest}, indent=2) + "\n"
    )
    print(f"Built augmented set with {counts['real']} real and {counts['synthetic']} synthetic images")


if __name__ == "__main__":
    main()

