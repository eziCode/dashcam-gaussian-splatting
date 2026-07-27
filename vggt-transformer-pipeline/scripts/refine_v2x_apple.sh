#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REPO_ROOT="$(cd "${ROOT}/.." && pwd)"
PREPARED="${1:-${ROOT}/runs/v2x-real-mid/prepared}"
INITIAL="${2:-${ROOT}/runs/v2x-real-mid/scene.ply}"
ITERATIONS="${3:-3000}"
OUTPUT="${4:-${ROOT}/runs/v2x-real-mid/refined}"

[[ -f "${PREPARED}/cameras.json" ]] || { echo "Missing ${PREPARED}/cameras.json" >&2; exit 2; }
[[ -f "${INITIAL}" ]] || { echo "Missing initial VGGT PLY: ${INITIAL}" >&2; exit 2; }

# Resolve caller-relative paths before entering the output directory.
PREPARED="$(cd "${PREPARED}" && pwd)"
INITIAL="$(cd "$(dirname "${INITIAL}")" && pwd)/$(basename "${INITIAL}")"
mkdir -p "${OUTPUT}"
OUTPUT="$(cd "${OUTPUT}" && pwd)"

"${ROOT}/.venv/bin/python" "${ROOT}/scripts/export_dynamic_masks.py" "${PREPARED}"
(
  cd "${OUTPUT}"
  PYTHONPATH="${REPO_ROOT}/gaussian-splatting-pipeline/third_party/splat-apple" \
    "${REPO_ROOT}/gaussian-splatting-pipeline/.venv-apple/bin/python" \
    "${REPO_ROOT}/gaussian-splatting-pipeline/scripts/train_mlx_adaptive.py" \
    --data_dir "${PREPARED}" --img_folder images --num_iterations "${ITERATIONS}" \
    --rasterizer cpp --initial-ply "${INITIAL}" --depth-prior-weight 0.02 \
    --max-gaussians 800000 --densify-fraction 0.03 --max-scale 0.018
)

FINAL="$(find "${OUTPUT}/results" -type f -name '*_final.ply' -print0 | xargs -0 ls -t | head -1)"
cp "${FINAL}" "${OUTPUT}/scene-refined.ply"
echo "Refined scene: ${OUTPUT}/scene-refined.ply"
