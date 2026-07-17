#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
IMAGES="${1:-${ROOT}/images_dense}"
RUN_NAME="${2:-viewcrafter_gsplat_$(date +%Y%m%d_%H%M%S)}"
STRIDE="${3:-4}"
STEPS="${4:-30000}"
RUN_ROOT="${ROOT}/runs/${RUN_NAME}"

command -v nvidia-smi >/dev/null || { echo "A Linux CUDA host is required." >&2; exit 1; }
command -v colmap >/dev/null || { echo "COLMAP is required." >&2; exit 1; }
command -v ffmpeg >/dev/null || { echo "ffmpeg is required." >&2; exit 1; }
[[ -d "${IMAGES}" ]] || { echo "Missing input images: ${IMAGES}" >&2; exit 1; }
[[ "${STRIDE}" =~ ^[1-9][0-9]*$ ]] || { echo "Stride must be a positive integer." >&2; exit 1; }
[[ "${STEPS}" =~ ^[1-9][0-9]*$ ]] || { echo "Steps must be a positive integer." >&2; exit 1; }
if [[ -e "${RUN_ROOT}" ]]; then
  echo "Run directory already exists: ${RUN_ROOT}" >&2
  echo "Choose a different run name." >&2
  exit 2
fi

VC_INPUT="${RUN_ROOT}/viewcrafter/input"
VC_OUTPUT="${RUN_ROOT}/viewcrafter/output"
GENERATED="${RUN_ROOT}/viewcrafter/generated"
AUGMENTED="${RUN_ROOT}/augmented/images"
DATASET="${RUN_ROOT}/colmap"
GSPLAT_OUTPUT="${RUN_ROOT}/gsplat"

python3 "${ROOT}/scripts/prepare_viewcrafter_inputs.py" \
  --images "${IMAGES}" \
  --output "${VC_INPUT}" \
  --stride "${STRIDE}"

"${ROOT}/scripts/run_viewcrafter_cuda.sh" "${VC_INPUT}" "${VC_OUTPUT}"

"${ROOT}/scripts/extract_viewcrafter_frames.sh" \
  "${VC_OUTPUT}/statue_dense/diffusion.mp4" \
  "${GENERATED}"

python3 "${ROOT}/scripts/build_augmented_images.py" \
  --real "${IMAGES}" \
  --synthetic "${GENERATED}" \
  --output "${AUGMENTED}"

COLMAP_GPU="${COLMAP_GPU:-1}" "${ROOT}/scripts/prepare_colmap.sh" \
  "${AUGMENTED}" \
  "${DATASET}" \
  exhaustive

"${ROOT}/scripts/train_gsplat_cuda.sh" \
  "${DATASET}" \
  "${GSPLAT_OUTPUT}" \
  "${STEPS}"

PLY="$(find "${GSPLAT_OUTPUT}/ply" -type f -name '*.ply' -print0 2>/dev/null | xargs -0 ls -t 2>/dev/null | head -1 || true)"
echo
echo "ViewCrafter + gsplat pipeline complete."
echo "Run directory: ${RUN_ROOT}"
echo "Final PLY: ${PLY}"
echo "Real/synthetic manifest: ${RUN_ROOT}/augmented/augmented_manifest.json"

