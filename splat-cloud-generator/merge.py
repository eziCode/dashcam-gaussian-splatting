#!/usr/bin/env python3
"""Register overlapping iPhone LiDAR captures and export one Gaussian PLY."""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

import numpy as np
import open3d as o3d

import generate


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("inputs", nargs="+", type=Path, help="Two or more capture folders, ZIPs, or colored PLY files")
    parser.add_argument("--output", required=True, type=Path, help="Merged Gaussian PLY")
    parser.add_argument("--voxel-size", type=float, default=0.04, help="Registration voxel size in meters")
    parser.add_argument("--fusion-voxel-size", type=float, default=0.025, help="Final fusion voxel size in meters")
    parser.add_argument("--frame-stride", type=int, default=2)
    parser.add_argument("--pixel-stride", type=int, default=3)
    parser.add_argument("--min-confidence", type=int, choices=(0, 1, 2), default=1)
    parser.add_argument("--max-depth", type=float, default=8.0)
    parser.add_argument("--max-points", type=int, default=1_000_000)
    parser.add_argument("--opacity", type=float, default=0.82)
    parser.add_argument("--min-fitness", type=float, default=0.12, help="Reject registrations below this overlap score")
    parser.add_argument("--shared-coordinates", action="store_true", help="Inputs came from one uninterrupted ARKit session")
    return parser.parse_args()


def load_cloud(path: Path, args: argparse.Namespace) -> o3d.geometry.PointCloud:
    if path.suffix.lower() == ".ply":
        return generate.load_point_cloud(path)
    return generate.capture_to_cloud(generate.locate_capture(path), args)


def prepared(cloud: o3d.geometry.PointCloud, voxel: float):
    down = cloud.voxel_down_sample(voxel)
    down.estimate_normals(o3d.geometry.KDTreeSearchParamHybrid(radius=voxel * 2.5, max_nn=40))
    feature = o3d.pipelines.registration.compute_fpfh_feature(
        down, o3d.geometry.KDTreeSearchParamHybrid(radius=voxel * 5.0, max_nn=100)
    )
    return down, feature


def register(source: o3d.geometry.PointCloud, target: o3d.geometry.PointCloud, args: argparse.Namespace):
    voxel = args.voxel_size
    source_down, source_feature = prepared(source, voxel)
    target_down, target_feature = prepared(target, voxel)

    if args.shared_coordinates:
        initial = np.eye(4)
    else:
        coarse = o3d.pipelines.registration.registration_ransac_based_on_feature_matching(
            source_down,
            target_down,
            source_feature,
            target_feature,
            True,
            voxel * 2.0,
            o3d.pipelines.registration.TransformationEstimationPointToPoint(False),
            4,
            [
                o3d.pipelines.registration.CorrespondenceCheckerBasedOnEdgeLength(0.85),
                o3d.pipelines.registration.CorrespondenceCheckerBasedOnDistance(voxel * 2.0),
            ],
            o3d.pipelines.registration.RANSACConvergenceCriteria(100_000, 0.999),
        )
        initial = coarse.transformation

    fine = o3d.pipelines.registration.registration_icp(
        source_down,
        target_down,
        voxel * 1.25,
        initial,
        o3d.pipelines.registration.TransformationEstimationPointToPlane(),
        o3d.pipelines.registration.ICPConvergenceCriteria(max_iteration=80),
    )
    return fine


def main() -> int:
    args = parse_args()
    if len(args.inputs) < 2:
        raise ValueError("Provide at least two scans")
    if args.voxel_size <= 0 or args.fusion_voxel_size <= 0:
        raise ValueError("Voxel sizes must be positive")

    clouds = [load_cloud(path, args) for path in args.inputs]
    merged = clouds[0].voxel_down_sample(args.fusion_voxel_size)
    manifest = [{"input": str(args.inputs[0]), "transform": np.eye(4).tolist(), "fitness": 1.0, "rmse": 0.0}]
    pending = list(range(1, len(clouds)))

    # Greedily attach whichever pending scan overlaps the fused model best. This
    # permits A↔B↔C chains even when A and C do not overlap directly.
    while pending:
        candidates = []
        for index in pending:
            result = register(clouds[index], merged, args)
            candidates.append((result.fitness, -result.inlier_rmse, index, result))
        _, _, index, best = max(candidates, key=lambda item: (item[0], item[1]))
        if best.fitness < args.min_fitness:
            remaining = ", ".join(str(args.inputs[i]) for i in pending)
            raise ValueError(
                f"Could not safely register remaining scans ({remaining}); best overlap fitness "
                f"was {best.fitness:.3f}, below --min-fitness {args.min_fitness:.3f}"
            )
        aligned = o3d.geometry.PointCloud(clouds[index])
        aligned.transform(best.transformation)
        merged += aligned
        merged = merged.voxel_down_sample(args.fusion_voxel_size)
        manifest.append(
            {
                "input": str(args.inputs[index]),
                "transform": np.asarray(best.transformation).tolist(),
                "fitness": float(best.fitness),
                "rmse": float(best.inlier_rmse),
            }
        )
        print(f"registered {args.inputs[index]}: fitness={best.fitness:.3f} rmse={best.inlier_rmse:.4f}")
        pending.remove(index)

    gaussian_args = argparse.Namespace(**vars(args))
    gaussian_args.voxel_size = args.fusion_voxel_size
    values = generate.prepare_gaussians(merged, gaussian_args)
    generate.write_gaussian_ply(args.output, values)
    manifest_path = args.output.with_suffix(".registration.json")
    manifest_path.write_text(json.dumps({"output": str(args.output), "scans": manifest}, indent=2))
    print(json.dumps({"output_gaussians": len(values[0]), "output": str(args.output.resolve()), "registration": str(manifest_path.resolve())}, indent=2))
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except (OSError, ValueError, RuntimeError) as error:
        print(f"error: {error}", file=sys.stderr)
        raise SystemExit(2)
