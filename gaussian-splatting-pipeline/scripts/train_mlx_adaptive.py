#!/usr/bin/env python3
"""Mask-aware MLX Gaussian training with gradient-driven densification."""

from __future__ import annotations

import argparse
import datetime
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
    xyz, rgb, infos = load_colmap_data_raw(str(path), image_folder)
    cameras, targets, masks = [], [], []
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
    return xyz, rgb, cameras, targets, masks


def make_optimizers():
    return {
        "means": optim.Adam(learning_rate=0.00016),
        "scales": optim.Adam(learning_rate=0.005),
        "quaternions": optim.Adam(learning_rate=0.001),
        "opacities": optim.Adam(learning_rate=0.05),
        "sh_coeffs": optim.Adam(learning_rate=0.0025),
    }


def train_step(params, optimizers, target, valid, camera, rasterizer):
    def loss_fn(values):
        image = render(values, camera, rasterizer_type=rasterizer)
        # Dynamic pixels contribute neither RGB nor SSIM gradients. Compositing
        # the detached render into them avoids teaching the static splat cars.
        composite = target * valid + mx.stop_gradient(image) * (1.0 - valid)
        loss = 0.8 * l1_loss(image, composite) + 0.2 * d_ssim_loss(image, composite)
        return loss, image

    (loss, image), grads = mx.value_and_grad(loss_fn)(params)
    for key, gradient in grads.items():
        params[key] = optimizers[key].apply_gradients({key: gradient}, {key: params[key]})[key]
    mse = mx.sum(mx.square(image - target) * valid) / mx.maximum(mx.sum(valid) * 3.0, 1.0)
    psnr = -10.0 * mx.log10(mx.maximum(mse, 1e-10))
    point_gradient = mx.sqrt(mx.sum(mx.square(grads["means"]), axis=1))
    return loss, image, psnr, point_gradient


def densify(params, gradients, fraction: float, maximum: int):
    count = params["means"].shape[0]
    add = min(maximum - count, max(1, int(count * fraction)))
    if add <= 0:
        return params, 0
    scores = np.asarray(gradients)
    selected = np.argpartition(scores, -add)[-add:]
    arrays = {key: np.asarray(value) for key, value in params.items()}
    direction = np.zeros_like(arrays["means"][selected])
    # Deterministic low-amplitude splitting avoids creating a second blurry
    # copy far away from its measured surface.
    axis = np.argmax(arrays["scales"][selected], axis=1)
    direction[np.arange(add), axis] = 1.0
    radius = np.clip(np.exp(np.max(arrays["scales"][selected], axis=1)), 0.0005, 0.02)
    duplicates = {}
    for key, value in arrays.items():
        copy = value[selected].copy()
        if key == "means":
            copy += direction * radius[:, None] * 0.5
        elif key == "scales":
            copy -= math.log(1.25)
        duplicates[key] = copy
    return {key: mx.array(np.concatenate([arrays[key], duplicates[key]], axis=0), dtype=mx.float32) for key in arrays}, add


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


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--data_dir", type=Path, required=True)
    parser.add_argument("--img_folder", default="images")
    parser.add_argument("--num_iterations", type=int, default=3000)
    parser.add_argument("--rasterizer", choices=("python", "cpp"), default="cpp")
    parser.add_argument("--normalize", action="store_true")
    parser.add_argument("--densify-every", type=int, default=400)
    parser.add_argument("--densify-fraction", type=float, default=0.25)
    parser.add_argument("--max-gaussians", type=int, default=400000)
    args = parser.parse_args()

    xyz, rgb, cameras, targets, masks = load_dataset(args.data_dir, args.img_folder)
    if args.normalize:
        centers = []
        for camera in cameras:
            w2c = np.asarray(camera.W2C); centers.append(-w2c[:3, :3].T @ w2c[:3, 3])
        centroid = np.mean(centers, axis=0); scale = 1.0 / (np.mean(np.linalg.norm(np.asarray(centers) - centroid, axis=1)) + 1e-6)
        xyz = (xyz - centroid) * scale
        for camera in cameras:
            w2c = np.asarray(camera.W2C); w2c[:3, 3] = (w2c[:3, :3] @ centroid + w2c[:3, 3]) * scale
            camera.W2C = mx.array(w2c, dtype=mx.float32)

    gaussian = init_gaussians_from_pcd(xyz, rgb)
    params = {key: getattr(gaussian, key) for key in ("means", "scales", "quaternions", "opacities", "sh_coeffs")}
    optimizers = make_optimizers()
    output = Path("results") / f"{args.data_dir.name}_mlx_adaptive_{datetime.datetime.now():%Y%m%d_%H%M%S}"
    progress = output / "progress"; ply = output / "ply"; progress.mkdir(parents=True); ply.mkdir()
    gradients = mx.zeros((params["means"].shape[0],), dtype=mx.float32)
    bar = tqdm(range(args.num_iterations))
    for iteration in bar:
        index = random.randrange(len(cameras))
        loss, image, psnr, current_gradients = train_step(params, optimizers, targets[index], masks[index], cameras[index], args.rasterizer)
        gradients = mx.maximum(gradients, current_gradients)
        mx.eval(params, loss, psnr, gradients)
        if iteration % 10 == 0:
            bar.set_description(f"Loss: {loss.item():.4f} PSNR: {psnr.item():.2f} G: {params['means'].shape[0]:,}")
        if iteration % 100 == 0:
            Image.fromarray((np.clip(np.asarray(image), 0, 1) * 255).astype(np.uint8)).save(progress / f"progress_{iteration:04d}.png")
        if args.densify_every and iteration >= args.densify_every and iteration % args.densify_every == 0:
            params, added = densify(params, gradients, args.densify_fraction, args.max_gaussians)
            if added:
                print(f"\nDensified {added:,} high-gradient Gaussians; total {params['means'].shape[0]:,}")
                optimizers = make_optimizers(); gradients = mx.zeros((params["means"].shape[0],), dtype=mx.float32)
    destination = ply / f"{args.data_dir.name}_final.ply"
    save_ply(destination, params)
    print(f"Saved {params['means'].shape[0]:,} Gaussians to {destination}")


if __name__ == "__main__":
    main()
