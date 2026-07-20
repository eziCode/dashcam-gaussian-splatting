#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CAPTURE="${1:-}"
RUN_NAME="${2:-iphone_$(date +%Y%m%d_%H%M%S)}"
STRIDE="${3:-3}"
ITERATIONS="${4:-2000}"
RUN_ROOT="${ROOT}/runs/${RUN_NAME}"

[[ "$(uname -s)" == "Darwin" ]] || { echo "This runner is for macOS." >&2; exit 1; }
[[ -n "${CAPTURE}" && -e "${CAPTURE}" ]] || { echo "Usage: $0 CAPTURE.zip [run-name] [stride] [iterations]" >&2; exit 1; }
[[ "${STRIDE}" =~ ^[1-9][0-9]*$ ]] || { echo "Stride must be a positive integer." >&2; exit 1; }
[[ "${ITERATIONS}" =~ ^[1-9][0-9]*$ ]] || { echo "Iterations must be a positive integer." >&2; exit 1; }
[[ ! -e "${RUN_ROOT}" ]] || { echo "Run already exists: ${RUN_ROOT}" >&2; exit 2; }

python3 "${ROOT}/scripts/prepare_iphone_rgb.py" "${CAPTURE}" "${RUN_ROOT}/capture" --stride "${STRIDE}"

read -r CAMERA_MODEL CAMERA_PARAMS < <(
  python3 -c 'import json,sys; m=json.load(open(sys.argv[1])); print(m["cameraModel"], ",".join(map(str,m["cameraParams"])))' \
    "${RUN_ROOT}/capture/capture_manifest.json"
)

COLMAP_GPU=0 COLMAP_CAMERA_MODEL="${CAMERA_MODEL}" COLMAP_CAMERA_PARAMS="${CAMERA_PARAMS}" \
  "${ROOT}/scripts/prepare_colmap.sh" \
    "${RUN_ROOT}/capture/images" \
    "${RUN_ROOT}/colmap" \
    sequential

"${ROOT}/scripts/train_apple.sh" "${RUN_ROOT}/colmap" "${ITERATIONS}" "${RUN_ROOT}/training"

PLY="$(find "${RUN_ROOT}/training/results" -type f -name '*_final.ply' -print0 | xargs -0 ls -t | head -1)"

echo
echo "iPhone RGB reconstruction complete."
echo "Run directory: ${RUN_ROOT}"
echo "Final PLY: ${PLY}"
echo "View it with: scripts/view_apple.sh \"${PLY}\""
