#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DATASET="${1:-${ROOT}/data/statue}"
ITERATIONS="${2:-2000}"
OUTPUT_ROOT="${3:-${ROOT}/outputs}"
VENV="${ROOT}/.venv-apple"
UPSTREAM="${ROOT}/third_party/splat-apple"

if [[ ! "${ITERATIONS}" =~ ^[1-9][0-9]*$ ]]; then
  echo "Iterations must be a positive integer." >&2
  exit 1
fi

if [[ ! -x "${VENV}/bin/python" ]]; then
  echo "Run scripts/setup_apple.sh first." >&2
  exit 2
fi

if [[ ! -e "${DATASET}/sparse/0/cameras.bin" ]]; then
  echo "Run scripts/prepare_colmap.sh first." >&2
  exit 3
fi

DATASET="$(cd "${DATASET}" && pwd)"

mkdir -p "${OUTPUT_ROOT}"
(
  cd "${OUTPUT_ROOT}"
  COMMAND=("${VENV}/bin/python" "${ROOT}/scripts/train_mlx_adaptive.py" \
    --data_dir "${DATASET}" \
    --img_folder images \
    --num_iterations "${ITERATIONS}" \
    --rasterizer cpp \
    --normalize)
  if (( $# > 3 )); then
    COMMAND+=("${@:4}")
  fi
  PYTHONPATH="${UPSTREAM}" "${COMMAND[@]}"
)

LATEST="$(find "${OUTPUT_ROOT}/results" -type f -name '*_final.ply' -print0 | xargs -0 ls -t | head -1)"
echo "Finished splat: ${LATEST}"
