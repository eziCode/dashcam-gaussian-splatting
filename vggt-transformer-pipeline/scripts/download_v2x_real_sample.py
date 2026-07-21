#!/usr/bin/env python3
"""Download a tiny, camera-only slice from the official V2X-Real ZIP.

The public V2X-Real camera archive is tens of gigabytes.  This script reads the
remote ZIP index with HTTP byte ranges, then downloads only selected JPEG and
YAML members.  LiDAR ``.bin`` members are never requested.
"""

from __future__ import annotations

import argparse
import re
import shutil
import struct
import tempfile
import urllib.request
import zipfile
from pathlib import Path


DEFAULT_URL = "https://ucla.app.box.com/shared/static/x9k5nyt4szrxbtnn8xk8sqiuhg5noqgv"
ZIP64_EOCD = struct.Struct("<4sQ2H2L4Q")
ZIP64_LOCATOR = struct.Struct("<4sLQL")
LOCAL_HEADER = struct.Struct("<4s5H3L2H")


def arguments() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("output", type=Path)
    parser.add_argument("--url", default=DEFAULT_URL)
    parser.add_argument("--scene", help="Exact scene name; defaults to the first four-agent intersection scene")
    parser.add_argument("--frames", type=int, default=8, help="Number of synchronized timesteps")
    parser.add_argument("--frame-stride", type=int, default=2)
    parser.add_argument("--start-index", type=int, default=24,
                        help="Start within the stride-filtered timeline (default targets the intersection midpoint)")
    parser.add_argument("--vehicle-camera", default="cam1")
    parser.add_argument("--infrastructure-camera", default="cam1")
    parser.add_argument("--max-download-mb", type=float, default=40.0)
    return parser.parse_args()


class RemoteFile:
    def __init__(self, url: str):
        request = urllib.request.Request(url, headers={"Range": "bytes=0-0"})
        with urllib.request.urlopen(request, timeout=60) as response:
            response.read()
            self.url = response.geturl()
            content_range = response.headers.get("Content-Range", "")
            match = re.search(r"/(\d+)$", content_range)
            if not match:
                raise RuntimeError("Dataset host did not honor HTTP byte ranges")
            self.size = int(match.group(1))

    def read(self, start: int, end: int) -> bytes:
        request = urllib.request.Request(self.url, headers={"Range": f"bytes={start}-{end}"})
        with urllib.request.urlopen(request, timeout=120) as response:
            payload = response.read()
        expected = end - start + 1
        if len(payload) != expected:
            raise RuntimeError(f"Expected {expected} bytes at {start}, received {len(payload)}")
        return payload


def remote_zip_index(remote: RemoteFile, path: Path) -> zipfile.ZipFile:
    tail_size = min(remote.size, 128 * 1024)
    tail_start = remote.size - tail_size
    tail = remote.read(tail_start, remote.size - 1)
    locator_offset = tail.rfind(b"PK\x06\x07")
    if locator_offset < 0:
        raise RuntimeError("ZIP64 locator was not found")
    _, _, zip64_offset, _ = ZIP64_LOCATOR.unpack_from(tail, locator_offset)
    zip64 = remote.read(zip64_offset, zip64_offset + ZIP64_EOCD.size - 1)
    values = ZIP64_EOCD.unpack(zip64)
    central_size, central_offset = values[-2], values[-1]
    central = remote.read(central_offset, central_offset + central_size - 1)

    # A sparse file gives zipfile a normal seekable index without storing the
    # unrequested 26 GB payload.
    with path.open("wb") as handle:
        handle.seek(central_offset)
        handle.write(central)
        handle.seek(zip64_offset)
        handle.write(remote.read(zip64_offset, remote.size - 1))
    return zipfile.ZipFile(path)


def member_parts(name: str) -> tuple[str, str, str] | None:
    parts = name.strip("/").split("/")
    if len(parts) != 4 or parts[0] != "test":
        return None
    return parts[1], parts[2], parts[3]


def choose_members(archive: zipfile.ZipFile, args: argparse.Namespace) -> tuple[str, list[zipfile.ZipInfo]]:
    scene_agents: dict[str, set[str]] = {}
    entries: dict[tuple[str, str, str], zipfile.ZipInfo] = {}
    for info in archive.infolist():
        parsed = member_parts(info.filename)
        if parsed is None:
            continue
        scene, agent, filename = parsed
        scene_agents.setdefault(scene, set()).add(agent)
        entries[(scene, agent, filename)] = info

    scene = args.scene
    if scene is None:
        candidates = sorted(name for name, agents in scene_agents.items() if {"-1", "-2", "1", "2"} <= agents)
        if not candidates:
            raise RuntimeError("No scene with two vehicles and two infrastructure agents was found")
        scene = candidates[0]
    if {"-1", "-2", "1", "2"} - scene_agents.get(scene, set()):
        raise RuntimeError(f"Scene {scene!r} does not contain agents -1, -2, 1, and 2")

    per_agent_frames: list[set[str]] = []
    for agent in ("-1", "-2", "1", "2"):
        per_agent_frames.append({filename[:6] for s, a, filename in entries if s == scene and a == agent and filename.endswith(".yaml")})
    common = sorted(set.intersection(*per_agent_frames))
    timeline = common[:: max(1, args.frame_stride)]
    selected_frames = timeline[args.start_index:args.start_index + args.frames]
    if len(selected_frames) < 2:
        raise RuntimeError("The selected scene has fewer than two common timesteps")

    selected: list[zipfile.ZipInfo] = []
    for frame in selected_frames:
        for agent in ("-1", "-2", "1", "2"):
            camera = args.infrastructure_camera if agent.startswith("-") else args.vehicle_camera
            for filename in (f"{frame}.yaml", f"{frame}_{camera}.jpeg"):
                info = entries.get((scene, agent, filename))
                if info is None:
                    raise RuntimeError(f"Missing synchronized member: {scene}/{agent}/{filename}")
                selected.append(info)
    return scene, selected


def materialize_member(remote: RemoteFile, sparse: Path, info: zipfile.ZipInfo) -> None:
    header = remote.read(info.header_offset, info.header_offset + LOCAL_HEADER.size - 1)
    values = LOCAL_HEADER.unpack(header)
    if values[0] != b"PK\x03\x04":
        raise RuntimeError(f"Invalid local ZIP header for {info.filename}")
    header_size = LOCAL_HEADER.size + values[-2] + values[-1]
    block = remote.read(info.header_offset, info.header_offset + header_size + info.compress_size - 1)
    with sparse.open("r+b") as handle:
        handle.seek(info.header_offset)
        handle.write(block)


def main() -> None:
    args = arguments()
    if args.frames < 2:
        raise SystemExit("--frames must be at least 2")
    if args.output.exists() and any(args.output.rglob("*.jpeg")):
        raise SystemExit(f"Output already contains a sample; choose an empty directory: {args.output}")
    args.output.mkdir(parents=True, exist_ok=True)
    remote = RemoteFile(args.url)
    with tempfile.TemporaryDirectory(prefix="v2x-real-index-") as temporary:
        sparse = Path(temporary) / "remote.zip"
        archive = remote_zip_index(remote, sparse)
        scene, members = choose_members(archive, args)
        compressed = sum(info.compress_size + LOCAL_HEADER.size + len(info.filename) + len(info.extra) for info in members)
        limit = int(args.max_download_mb * 1024 * 1024)
        if compressed > limit:
            raise RuntimeError(
                f"Selection requires approximately {compressed / 1024 / 1024:.1f} MiB, "
                f"above the {args.max_download_mb:.1f} MiB limit"
            )
        print(f"Scene: {scene}")
        print(f"Downloading {len(members) // 2} RGB views and {len(members) // 2} metadata files "
              f"({compressed / 1024 / 1024:.1f} MiB compressed); LiDAR excluded")
        for index, info in enumerate(members, 1):
            print(f"[{index}/{len(members)}] {info.filename}")
            materialize_member(remote, sparse, info)
        archive.close()
        with zipfile.ZipFile(sparse) as complete:
            for info in members:
                relative = Path(info.filename).relative_to(Path("test") / scene)
                target = args.output / relative
                target.parent.mkdir(parents=True, exist_ok=True)
                with complete.open(info) as source, target.open("wb") as destination:
                    shutil.copyfileobj(source, destination)

    lidar = list(args.output.rglob("*.bin"))
    if lidar:
        raise RuntimeError("Camera-only invariant violated: LiDAR files were written")
    print(f"Saved camera-only sample to {args.output.resolve()}")


if __name__ == "__main__":
    main()
