#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REPO_ROOT="$(cd "${ROOT}/.." && pwd)"
DATASET="${1:-${REPO_ROOT}/gaussian-splatting-pipeline/runs/cooperscene_demo/colmap}"
OUTPUT="${2:-${ROOT}/runs/cooperscene_demo/scene-high-quality.ply}"

exec "${ROOT}/scripts/run_cooperscene_apple.sh" "${DATASET}" "${OUTPUT}" \
  --agents 2 3 \
  --frame-stride 1 \
  --timesteps-per-chunk 8 \
  --chunk-overlap 4 \
  --confidence-percentile 60 \
  --pixel-stride 1 \
  --voxel-size 0.0015 \
  --max-points 2000000 \
  --max-point-distance 5.0 \
  --adaptive-anchors 2 \
  --min-chunk-support 2 \
  --support-voxel-size 0.01 \
  "${@:3}"
