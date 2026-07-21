#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DATASET="${1:-}"
RUN_NAME="${2:-cooperscene_$(date +%Y%m%d_%H%M%S)}"
SPLIT="${3:-train}"
TAKE="${4:-}"
STRIDE="${5:-1}"
MAX_TIMESTEPS="${6:-180}"
ITERATIONS="${7:-2000}"
RUN_ROOT="${ROOT}/runs/${RUN_NAME}"

[[ "$(uname -s)" == "Darwin" ]] || { echo "This runner is for macOS." >&2; exit 1; }
[[ -n "${DATASET}" && -d "${DATASET}" ]] || {
  echo "Usage: $0 COOPERSCENE_ROOT [run-name] [split] [take] [stride] [max-timesteps] [iterations]" >&2
  exit 1
}
[[ "${STRIDE}" =~ ^[1-9][0-9]*$ ]] || { echo "Stride must be a positive integer." >&2; exit 1; }
[[ "${MAX_TIMESTEPS}" =~ ^[1-9][0-9]*$ ]] || { echo "Max timesteps must be a positive integer." >&2; exit 1; }
[[ "${ITERATIONS}" =~ ^[1-9][0-9]*$ ]] || { echo "Iterations must be a positive integer." >&2; exit 1; }
[[ ! -e "${RUN_ROOT}" ]] || { echo "Run already exists: ${RUN_ROOT}" >&2; exit 2; }

PREPARE_ARGS=("${DATASET}" "${RUN_ROOT}/capture" --split "${SPLIT}" --stride "${STRIDE}" --max-timesteps "${MAX_TIMESTEPS}")
if [[ -n "${TAKE}" ]]; then
  PREPARE_ARGS+=(--take "${TAKE}")
fi
python3 "${ROOT}/scripts/prepare_cooperscene_rgb.py" "${PREPARE_ARGS[@]}"

# CooperScene's calibrated GNSS platform poses initialize all cameras. RGB
# feature matches triangulate and refine the model; no point cloud is opened.
COLMAP_GPU=0 "${ROOT}/scripts/prepare_colmap_with_priors.sh" \
  "${RUN_ROOT}/capture" \
  "${RUN_ROOT}/colmap"

"${ROOT}/scripts/train_apple.sh" "${RUN_ROOT}/colmap" "${ITERATIONS}" "${RUN_ROOT}/training"

PLY="$(find "${RUN_ROOT}/training/results" -type f -name '*_final.ply' -print0 | xargs -0 ls -t | head -1)"
cp "${RUN_ROOT}/capture/cooperscene_manifest.json" "${RUN_ROOT}/timeline.json"

echo
echo "CooperScene RGB-only reconstruction complete."
echo "Run directory: ${RUN_ROOT}"
echo "Timeline: ${RUN_ROOT}/timeline.json"
echo "Final PLY: ${PLY}"
echo "View it with: scripts/view_apple.sh \"${PLY}\""
