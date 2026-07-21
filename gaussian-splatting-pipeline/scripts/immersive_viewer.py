#!/usr/bin/env python3
"""View a Gaussian scene from inside its recorded camera path."""

from __future__ import annotations

import argparse
import struct
import sys
import time
from pathlib import Path

import numpy as np
import viser


def arguments() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("ply", type=Path)
    parser.add_argument("--dataset", type=Path, help="Dataset supplying recorded camera poses")
    parser.add_argument("--port", type=int, default=8080)
    parser.add_argument(
        "--path-radius",
        type=float,
        default=0.45,
        help="Maximum normalized distance from a recorded camera before returning inside",
    )
    return parser.parse_args()


def load_splats(path: Path):
    upstream = Path(__file__).resolve().parents[1] / "third_party" / "splat-apple"
    sys.path.insert(0, str(upstream))
    from viewer_ply import load_ply

    return load_ply(str(path))


def quaternion_to_rotation(quaternion: np.ndarray) -> np.ndarray:
    w, x, y, z = quaternion / np.linalg.norm(quaternion)
    return np.array([
        [1 - 2 * (y * y + z * z), 2 * (x * y - w * z), 2 * (x * z + w * y)],
        [2 * (x * y + w * z), 1 - 2 * (x * x + z * z), 2 * (y * z - w * x)],
        [2 * (x * z - w * y), 2 * (y * z + w * x), 1 - 2 * (x * x + y * y)],
    ])


def load_camera_path_with_transform(dataset: Path):
    images_path = dataset / "sparse" / "0" / "images.bin"
    centers, forwards, ups, names = [], [], [], []
    with images_path.open("rb") as handle:
        count = struct.unpack("<Q", handle.read(8))[0]
        for _ in range(count):
            properties = struct.unpack("<idddddddi", handle.read(64))
            quaternion = np.asarray(properties[1:5])
            translation = np.asarray(properties[5:8])
            name_bytes = bytearray()
            while (character := handle.read(1)) != b"\0":
                name_bytes.extend(character)
            points = struct.unpack("<Q", handle.read(8))[0]
            handle.seek(points * 24, 1)
            world_to_camera = quaternion_to_rotation(quaternion)
            camera_to_world = world_to_camera.T
            centers.append(-camera_to_world @ translation)
            forwards.append(camera_to_world[:, 2])
            ups.append(-camera_to_world[:, 1])
            names.append(name_bytes.decode("utf-8"))

    centers_array = np.asarray(centers)
    centroid = centers_array.mean(axis=0)
    scale = 1.0 / (np.linalg.norm(centers_array - centroid, axis=1).mean() + 1e-6)
    return (centers_array - centroid) * scale, np.asarray(forwards), np.asarray(ups), names, centroid, scale


def load_camera_path(dataset: Path) -> tuple[np.ndarray, np.ndarray, np.ndarray, list[str]]:
    centers, forwards, ups, names, _, _ = load_camera_path_with_transform(dataset)
    return centers, forwards, ups, names


def fallback_camera(means: np.ndarray):
    low, high = np.quantile(means, [0.1, 0.9], axis=0)
    position = (low + high) * 0.5
    extent = high - low
    axis = int(np.argmax(extent))
    forward = np.zeros(3)
    forward[axis] = 1.0
    up = np.array([0.0, 1.0, 0.0])
    return position[None], forward[None], up[None], ["Scene center"]


def run(args: argparse.Namespace) -> None:
    means, covariances, colors, opacities = load_splats(args.ply)
    if means is None:
        raise ValueError("could not load splat PLY")
    if args.dataset and (args.dataset / "sparse" / "0" / "images.bin").is_file():
        centers, forwards, ups, names = load_camera_path(args.dataset)
    else:
        centers, forwards, ups, names = fallback_camera(means)

    server = viser.ViserServer(port=args.port, label="Walk inside reconstruction")
    server.gui.configure_theme(dark_mode=True, control_layout="collapsible")
    # Coverage gaps should read as an unobserved neutral surface, not a black void.
    server.scene.set_background_image(np.full((2, 2, 3), (190, 185, 176), dtype=np.uint8))

    @server.on_client_connect
    def _(client: viser.ClientHandle):
        client.scene.add_gaussian_splats(
            "/room",
            centers=np.ascontiguousarray(means),
            covariances=np.ascontiguousarray(covariances),
            rgbs=np.ascontiguousarray(colors),
            opacities=np.ascontiguousarray(opacities.reshape(-1, 1)),
        )
        # A tiny near plane makes large nearby Gaussians explode across the
        # screen. Keep it large enough for stable indoor navigation.
        client.camera.near = 0.06
        client.camera.far = 100.0

        capture_ids = []
        for name in names:
            prefix = name.split("_frame_")[0].replace("capture_", "Capture ")
            capture_ids.append(prefix)
        choices = [f"{capture_ids[index]} · viewpoint {index + 1}" for index in range(len(names))]
        selector = client.gui.add_dropdown("Recorded location", choices, initial_value=choices[0])
        return_button = client.gui.add_button("Return to recorded location")
        client.gui.add_markdown(
            "**Guided navigation is on.** Drag to look/orbit, right-drag to pan, "
            "and scroll to move. If you leave the captured space, the camera "
            "returns to the last safe viewpoint."
        )

        correcting = False
        correction_time = 0.0
        last_safe_index = 0

        def place(index: int) -> None:
            nonlocal correcting, correction_time, last_safe_index
            correcting = True
            position = centers[index]
            client.camera.position = position
            client.camera.look_at = position + forwards[index] * 0.7
            client.camera.up_direction = ups[index]
            last_safe_index = index
            correction_time = time.monotonic()
            correcting = False

        @selector.on_update
        def _(event) -> None:
            place(choices.index(event.target.value))

        @return_button.on_click
        def _(_) -> None:
            place(choices.index(selector.value))

        @client.camera.on_update
        def _(camera: viser.CameraHandle) -> None:
            nonlocal last_safe_index
            if correcting or time.monotonic() - correction_time < 0.75:
                return
            position = np.asarray(camera.position)
            distances = np.linalg.norm(centers - position, axis=1)
            nearest = int(np.argmin(distances))
            if distances[nearest] <= args.path_radius:
                last_safe_index = nearest
                return
            # Reset the complete camera pose once. Unlike a continuous clamp,
            # this also resynchronizes Viser's orbit target and avoids jitter at
            # the boundary.
            place(last_safe_index)

        place(0)

    print(f"Immersive viewer: http://localhost:{args.port}")
    print(f"Loaded {len(means):,} splats and {len(centers)} recorded viewpoints")
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    run(arguments())
