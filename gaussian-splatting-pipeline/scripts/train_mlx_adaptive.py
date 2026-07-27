#!/usr/bin/env python3
"""Stable, mask-aware Gaussian training for Apple Silicon.

This trainer deliberately favors supported, compact Gaussians over raw point
count.  Topology updates split (and replace) useful parents, prune transparent
or pathological points, and keep scales bounded throughout optimization.
"""

from __future__ import annotations

import argparse
import datetime
import json
import math
import os
import random
from pathlib import Path

import mlx.core as mx
import mlx.optimizers as optim
import numpy as np
from PIL import Image
from plyfile import PlyData, PlyElement
from tqdm import tqdm

from mlx_gs.core.gaussians import Gaussians, init_gaussians_from_pcd
from mlx_gs.renderer.renderer import render
from mlx_gs.training.losses import d_ssim_loss, l1_loss
from mlx_gs.training.trainer import Camera
from torch_gs.io.colmap import load_colmap_data_raw


def load_dataset(path: Path, image_folder: str):
    manifest = path / "cameras.json"
    if manifest.is_file():
        payload = json.loads(manifest.read_text())
        records = payload["records"]
        centers = np.asarray([record["center"] for record in records], dtype=np.float32)
        centroid = centers.mean(0)
        scene_scale = 1.0 / (np.linalg.norm(centers - centroid, axis=1).mean() + 1e-6)
        cameras, targets, masks, names = [], [], [], []
        mask_root = path / "masks"
        for record in records:
            image_path = path / image_folder / record["image"]
            with Image.open(image_path) as source:
                target = np.asarray(source.convert("RGB"), dtype=np.float32) / 255.0
            height, width = target.shape[:2]
            intrinsic = np.asarray(record["intrinsic"], dtype=np.float32)
            # Intrinsics in V2X metadata correspond to the source JPEG.
            w2c = np.eye(4, dtype=np.float32)
            rotation = np.asarray(record["rotation"], dtype=np.float32)
            translation = np.asarray(record["translation"], dtype=np.float32)
            w2c[:3, :3] = rotation
            w2c[:3, 3] = (rotation @ centroid + translation) * scene_scale
            cameras.append(Camera(width, height, float(intrinsic[0, 0]), float(intrinsic[1, 1]),
                                  float(intrinsic[0, 2]), float(intrinsic[1, 2]),
                                  mx.array(w2c), mx.eye(4)))
            targets.append(mx.array(target))
            mask_path = mask_root / record["image"]
            if mask_path.is_file():
                with Image.open(mask_path) as mask:
                    valid = np.asarray(mask.convert("L").resize((width, height), Image.Resampling.NEAREST), dtype=np.float32) / 255.0
            else:
                valid = np.ones((height, width), dtype=np.float32)
            masks.append(mx.array(valid[..., None])); names.append(record["image"])
        return None, None, cameras, targets, masks, names
    xyz, rgb, infos = load_colmap_data_raw(str(path), image_folder)
    cameras, targets, masks, names = [], [], [], []
    mask_root = path / "masks"
    for info in infos:
        fx = info.width / (2 * math.tan(info.FovX / 2))
        fy = info.height / (2 * math.tan(info.FovY / 2))
        w2c = np.eye(4)
        w2c[:3, :3], w2c[:3, 3] = info.R, info.T
        cameras.append(Camera(info.width, info.height, float(fx), float(fy), info.width / 2, info.height / 2, mx.array(w2c, dtype=mx.float32), mx.eye(4)))
        targets.append(mx.array(info.image, dtype=mx.float32))
        mask_path = mask_root / info.image_name
        if mask_path.is_file():
            with Image.open(mask_path) as mask:
                valid = np.asarray(mask.convert("L").resize((info.width, info.height), Image.Resampling.NEAREST), dtype=np.float32) / 255.0
        else:
            valid = np.ones((info.height, info.width), dtype=np.float32)
        masks.append(mx.array(valid[..., None], dtype=mx.float32))
        names.append(info.image_name)
    return xyz, rgb, cameras, targets, masks, names


def make_optimizers():
    return {
        "means": optim.Adam(learning_rate=0.00016),
        "scales": optim.Adam(learning_rate=0.005),
        "quaternions": optim.Adam(learning_rate=0.001),
        "opacities": optim.Adam(learning_rate=0.05),
        "sh_coeffs": optim.Adam(learning_rate=0.0025),
    }


def train_step(params, optimizers, target, valid, camera, rasterizer, max_scale, scale_weight,
               prior_means, depth_prior_weight):
    def loss_fn(values):
        image = render(values, camera, rasterizer_type=rasterizer)
        # Dynamic pixels contribute neither RGB nor SSIM gradients. Compositing
        # the detached render into them avoids teaching the static splat cars.
        composite = target * valid + mx.stop_gradient(image) * (1.0 - valid)
        photometric = 0.8 * l1_loss(image, composite) + 0.2 * d_ssim_loss(image, composite)
        radii = mx.exp(values["scales"])
        oversize = mx.maximum(radii - max_scale, 0.0) / max_scale
        # Penalize both huge splats and extreme needles, the two most visible
        # causes of colored fog in sparse outdoor reconstructions.
        anisotropy = mx.maximum(mx.max(values["scales"], axis=1) - mx.min(values["scales"], axis=1) - math.log(8.0), 0.0)
        regularizer = scale_weight * (mx.mean(mx.square(oversize)) + 0.1 * mx.mean(mx.square(anisotropy)))
        # The initialization is the fused VGGT depth surface. Keeping Gaussian
        # centers near it is a robust depth prior even after topology changes.
        depth_prior = mx.mean(mx.sum(mx.square(values["means"] - prior_means), axis=1))
        loss = photometric + regularizer + depth_prior_weight * depth_prior
        return loss, image

    (loss, image), grads = mx.value_and_grad(loss_fn)(params)
    for key, gradient in grads.items():
        params[key] = optimizers[key].apply_gradients({key: gradient}, {key: params[key]})[key]
    mse = mx.sum(mx.square(image - target) * valid) / mx.maximum(mx.sum(valid) * 3.0, 1.0)
    psnr = -10.0 * mx.log10(mx.maximum(mse, 1e-10))
    point_gradient = mx.sqrt(mx.sum(mx.square(grads["means"]), axis=1))
    return loss, image, psnr, point_gradient


def constrain(params, min_scale: float, max_scale: float):
    """Project unstable parameters back into a renderer-safe range."""
    params["scales"] = mx.clip(params["scales"], math.log(min_scale), math.log(max_scale))
    params["opacities"] = mx.clip(params["opacities"], -8.0, 6.0)
    norm = mx.sqrt(mx.sum(mx.square(params["quaternions"]), axis=1, keepdims=True) + 1e-12)
    params["quaternions"] = params["quaternions"] / norm
    return params


def update_topology(params, gradients, fraction: float, maximum: int, min_scale: float,
                    max_scale: float, opacity_threshold: float, allow_pruning: bool):
    """Prune unsupported splats, then replace high-gradient parents by children."""
    arrays = {key: np.asarray(value) for key, value in params.items()}
    count_before = len(arrays["means"])
    radii = np.exp(arrays["scales"])
    opacity = 1.0 / (1.0 + np.exp(-arrays["opacities"][:, 0]))
    finite = np.isfinite(arrays["means"]).all(1) & np.isfinite(radii).all(1)
    sane = radii.max(1) <= max_scale * 1.01
    keep = finite & sane
    if allow_pruning:
        keep &= opacity >= opacity_threshold
    pruned = int(count_before - keep.sum())
    arrays = {key: value[keep] for key, value in arrays.items()}
    scores = np.asarray(gradients)[keep]

    count = len(arrays["means"])
    capacity = max(0, maximum - count)
    split_count = min(capacity, max(1, int(count * fraction))) if count else 0
    # Only split splats large enough to benefit; cloning tiny splats merely
    # increases memory without increasing spatial resolution.
    eligible = np.flatnonzero(np.exp(arrays["scales"]).max(1) > min_scale * 2.0)
    split_count = min(split_count, len(eligible))
    if split_count == 0:
        result = {key: mx.array(value, dtype=mx.float32) for key, value in arrays.items()}
        return result, 0, pruned
    selected = eligible[np.argpartition(scores[eligible], -split_count)[-split_count:]]
    retained = np.ones(count, dtype=bool); retained[selected] = False
    axis = np.argmax(arrays["scales"][selected], axis=1)
    offset = np.zeros_like(arrays["means"][selected])
    parent_radius = np.exp(arrays["scales"][selected][np.arange(split_count), axis])
    offset[np.arange(split_count), axis] = parent_radius * 0.35

    children = {}
    for key, value in arrays.items():
        first, second = value[selected].copy(), value[selected].copy()
        if key == "means":
            first -= offset; second += offset
        elif key == "scales":
            first -= math.log(1.6); second -= math.log(1.6)
        elif key == "opacities":
            # Two children together should initially contribute about as much
            # density as their parent.
            first -= math.log(2.0); second -= math.log(2.0)
        children[key] = np.concatenate([first, second], axis=0)
    result = {
        key: mx.array(np.concatenate([value[retained], children[key]], axis=0), dtype=mx.float32)
        for key, value in arrays.items()
    }
    return result, split_count, pruned


def reset_opacity(params, maximum_probability: float):
    maximum_logit = math.log(maximum_probability / (1.0 - maximum_probability))
    params["opacities"] = mx.minimum(params["opacities"], maximum_logit)
    return params


def final_prune(params, opacity_threshold: float, max_scale: float):
    arrays = {key: np.asarray(value) for key, value in params.items()}
    opacity = 1.0 / (1.0 + np.exp(-arrays["opacities"][:, 0]))
    radii = np.exp(arrays["scales"])
    keep = (
        np.isfinite(arrays["means"]).all(1)
        & np.isfinite(radii).all(1)
        & (radii.max(1) <= max_scale * 1.01)
        & (opacity >= opacity_threshold)
    )
    return ({key: mx.array(value[keep], dtype=mx.float32) for key, value in arrays.items()}, int((~keep).sum()))


def balanced_camera_order(names: list[str]):
    """Yield shuffled camera-balanced indices forever."""
    groups: dict[str, list[int]] = {}
    for index, name in enumerate(names):
        agent = next((part for part in Path(name).stem.split("_") if part.startswith("a") and part[1:].isdigit()), "all")
        groups.setdefault(agent, []).append(index)
    while True:
        for indices in groups.values():
            random.shuffle(indices)
        rounds = max(len(indices) for indices in groups.values())
        for position in range(rounds):
            agents = list(groups); random.shuffle(agents)
            for agent in agents:
                indices = groups[agent]
                yield indices[position % len(indices)]


def save_ply(path: Path, params) -> None:
    xyz = np.asarray(params["means"]); normals = np.zeros_like(xyz)
    colors = np.asarray(params["sh_coeffs"][:, 0, :]); opacity = np.asarray(params["opacities"])
    scales = np.asarray(params["scales"]); rotations = np.asarray(params["quaternions"])
    dtype = [(name, "f4") for name in ("x", "y", "z", "nx", "ny", "nz", "f_dc_0", "f_dc_1", "f_dc_2", "opacity", "scale_0", "scale_1", "scale_2", "rot_0", "rot_1", "rot_2", "rot_3")]
    elements = np.empty(len(xyz), dtype=dtype)
    for column, name in enumerate(("x", "y", "z")): elements[name] = xyz[:, column]
    for column, name in enumerate(("nx", "ny", "nz")): elements[name] = normals[:, column]
    for column, name in enumerate(("f_dc_0", "f_dc_1", "f_dc_2")): elements[name] = colors[:, column]
    elements["opacity"] = opacity[:, 0]
    for column, name in enumerate(("scale_0", "scale_1", "scale_2")): elements[name] = scales[:, column]
    for column, name in enumerate(("rot_0", "rot_1", "rot_2", "rot_3")): elements[name] = rotations[:, column]
    PlyData([PlyElement.describe(elements, "vertex")]).write(path)


def load_initial_ply(path: Path):
    vertex = PlyData.read(path)["vertex"].data
    def columns(names):
        return np.column_stack([np.asarray(vertex[name], dtype=np.float32) for name in names])
    params = {
        "means": columns(("x", "y", "z")),
        "scales": columns(("scale_0", "scale_1", "scale_2")),
        "quaternions": columns(("rot_0", "rot_1", "rot_2", "rot_3")),
        "opacities": np.asarray(vertex["opacity"], dtype=np.float32)[:, None],
        "sh_coeffs": columns(("f_dc_0", "f_dc_1", "f_dc_2"))[:, None, :],
    }
    # Keep initialization on the CPU until any point-count cap is applied;
    # NumPy advanced indexing cannot be used directly on MLX arrays.
    return params


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--data_dir", type=Path, required=True)
    parser.add_argument("--img_folder", default="images")
    parser.add_argument("--num_iterations", type=int, default=3000)
    parser.add_argument("--rasterizer", choices=("python", "cpp"), default="cpp")
    parser.add_argument("--normalize", action="store_true")
    parser.add_argument("--densify-every", type=int, default=400)
    parser.add_argument("--densify-fraction", type=float, default=0.08)
    parser.add_argument("--densify-until", type=int, default=1800)
    parser.add_argument("--max-gaussians", type=int, default=250000)
    parser.add_argument("--min-scale", type=float, default=0.0005)
    parser.add_argument("--max-scale", type=float, default=0.025)
    parser.add_argument("--scale-weight", type=float, default=0.02)
    parser.add_argument("--prune-after", type=int, default=800)
    parser.add_argument("--opacity-threshold", type=float, default=0.01)
    parser.add_argument("--final-opacity-threshold", type=float, default=0.005)
    parser.add_argument("--opacity-reset-every", type=int, default=600)
    parser.add_argument("--initial-ply", type=Path,
                        help="Initialize all Gaussian attributes from a VGGT surfel PLY")
    parser.add_argument("--depth-prior-weight", type=float, default=0.02,
                        help="Weight keeping centers near the fused VGGT depth surface")
    parser.add_argument("--max-initial-gaussians", type=int, default=300000,
                        help="Deterministically cap a dense VGGT initialization")
    args = parser.parse_args()

    if not 0 < args.densify_fraction <= 0.5:
        parser.error("--densify-fraction must be in (0, 0.5]")
    if not 0 < args.min_scale < args.max_scale:
        parser.error("scales must satisfy 0 < --min-scale < --max-scale")
    xyz, rgb, cameras, targets, masks, image_names = load_dataset(args.data_dir, args.img_folder)
    if args.normalize:
        centers = []
        for camera in cameras:
            w2c = np.asarray(camera.W2C); centers.append(-w2c[:3, :3].T @ w2c[:3, 3])
        centroid = np.mean(centers, axis=0); scale = 1.0 / (np.mean(np.linalg.norm(np.asarray(centers) - centroid, axis=1)) + 1e-6)
        xyz = (xyz - centroid) * scale
        for camera in cameras:
            w2c = np.asarray(camera.W2C); w2c[:3, 3] = (w2c[:3, :3] @ centroid + w2c[:3, 3]) * scale
            camera.W2C = mx.array(w2c, dtype=mx.float32)

    if args.initial_ply:
        params = load_initial_ply(args.initial_ply)
        if len(params["means"]) > args.max_initial_gaussians:
            selection = np.random.default_rng(42).choice(
                len(params["means"]), args.max_initial_gaussians, replace=False
            )
            params = {key: value[selection] for key, value in params.items()}
        params = {key: mx.array(value, dtype=mx.float32) for key, value in params.items()}
    else:
        if xyz is None or not len(xyz):
            parser.error("native cameras.json datasets require --initial-ply")
        gaussian = init_gaussians_from_pcd(xyz, rgb)
        params = {key: getattr(gaussian, key) for key in ("means", "scales", "quaternions", "opacities", "sh_coeffs")}
    prior_means = params["means"]
    optimizers = make_optimizers()
    output = Path("results") / f"{args.data_dir.name}_mlx_adaptive_{datetime.datetime.now():%Y%m%d_%H%M%S}"
    progress = output / "progress"; ply = output / "ply"; progress.mkdir(parents=True); ply.mkdir()
    gradients = mx.zeros((params["means"].shape[0],), dtype=mx.float32)
    sampler = balanced_camera_order(image_names)
    bar = tqdm(range(args.num_iterations))
    for iteration in bar:
        index = next(sampler)
        loss, image, psnr, current_gradients = train_step(
            params, optimizers, targets[index], masks[index], cameras[index], args.rasterizer,
            args.max_scale, args.scale_weight, prior_means, args.depth_prior_weight,
        )
        params = constrain(params, args.min_scale, args.max_scale)
        gradients = mx.maximum(gradients, current_gradients)
        mx.eval(params, loss, psnr, gradients)
        if iteration % 10 == 0:
            bar.set_description(f"Loss: {loss.item():.4f} PSNR: {psnr.item():.2f} G: {params['means'].shape[0]:,}")
        if iteration % 100 == 0:
            Image.fromarray((np.clip(np.asarray(image), 0, 1) * 255).astype(np.uint8)).save(progress / f"progress_{iteration:04d}.png")
        if args.opacity_reset_every and iteration > 0 and iteration < args.densify_until and iteration % args.opacity_reset_every == 0:
            params = reset_opacity(params, 0.10)
            optimizers = make_optimizers()
        if (args.densify_every and iteration >= args.densify_every and iteration <= args.densify_until
                and iteration % args.densify_every == 0):
            params, split, pruned = update_topology(
                params, gradients, args.densify_fraction, args.max_gaussians,
                args.min_scale, args.max_scale, args.opacity_threshold,
                allow_pruning=iteration >= args.prune_after,
            )
            print(f"\nTopology: split {split:,}, pruned {pruned:,}; total {params['means'].shape[0]:,}")
            optimizers = make_optimizers(); gradients = mx.zeros((params["means"].shape[0],), dtype=mx.float32)
            prior_means = params["means"]
    params, final_pruned = final_prune(params, args.final_opacity_threshold, args.max_scale)
    mx.eval(params)
    print(f"Final cleanup pruned {final_pruned:,} unsupported Gaussians")
    destination = ply / f"{args.data_dir.name}_final.ply"
    save_ply(destination, params)
    provenance = {
        "method": "Masked L1+SSIM Gaussian refinement initialized from VGGT geometry",
        "sourceDataset": str(args.data_dir.resolve()),
        "initialPly": str(args.initial_ply.resolve()) if args.initial_ply else None,
        "dynamicMasksUsed": (args.data_dir / "masks").is_dir(),
        "depthPriorWeight": args.depth_prior_weight,
        "pointCount": int(params["means"].shape[0]),
        "parameters": {key: str(value) if isinstance(value, Path) else value for key, value in vars(args).items()},
        "warning": "VGGT geometry is model-inferred and refinement must not be described as measured geometry.",
    }
    destination.with_suffix(".json").write_text(json.dumps(provenance, indent=2) + "\n")
    print(f"Saved {params['means'].shape[0]:,} Gaussians to {destination}")


if __name__ == "__main__":
    main()
