#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SAMPLE="${1:-${ROOT}/data/v2x-real-connected}"
RUN="${2:-${ROOT}/runs/v2x-global}"
REFINE_ITERATIONS="${3:-3000}"
PREPARED="${RUN}/prepared"
SCENE="${RUN}/scene-vggt.ply"

mkdir -p "${RUN}"
"${ROOT}/.venv/bin/python" "${ROOT}/scripts/prepare_v2x_real.py" \
  "${SAMPLE}" "${PREPARED}" --max-frame 60

"${ROOT}/.venv/bin/python" "${ROOT}/scripts/reconstruct.py" \
  "${PREPARED}" "${SCENE}" \
  --device mps \
  --chunk-mode hybrid \
  --frame-stride 1 \
  --timesteps-per-chunk 8 \
  --chunk-overlap 0 \
  --alignment-mode calibrated-cameras \
  --calibrated-depth-scale 2.0 \
  --ground-register \
  --max-ground-shift 0.25 \
  --original-rgb-colors \
  --confidence-percentile 65 \
  --pixel-stride 1 \
  --voxel-size 0.0025 \
  --max-points 2000000 \
  --min-chunk-support 1 \
  --support-voxel-size 0.02 \
  --min-camera-span 0.002 \
  --max-point-distance 2.0 \
  --max-relative-depth-gradient 0.10 \
  --depth-cache "${RUN}/depth-cache"

if [[ "${REFINE_ITERATIONS}" != "0" ]]; then
  "${ROOT}/scripts/refine_v2x_apple.sh" \
    "${PREPARED}" "${SCENE}" "${REFINE_ITERATIONS}" "${RUN}/refined"
fi

echo "VGGT scene: ${SCENE}"
if [[ -f "${RUN}/refined/scene-refined.ply" ]]; then
  echo "Globally refined scene: ${RUN}/refined/scene-refined.ply"
fi
