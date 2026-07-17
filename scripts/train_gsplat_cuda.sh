#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
UPSTREAM="${ROOT}/third_party/gsplat"
DATASET="${1:-${ROOT}/data/statue}"
RESULT="${2:-${ROOT}/outputs/gsplat/statue}"
STEPS="${3:-30000}"
ENV_NAME="${GSPLAT_ENV:-gsplat}"
GPU="${GSPLAT_GPU:-0}"
DATA_FACTOR="${GSPLAT_DATA_FACTOR:-1}"
TEST_EVERY="${GSPLAT_TEST_EVERY:-8}"
STRATEGY="${GSPLAT_STRATEGY:-default}"

command -v nvidia-smi >/dev/null || { echo "A CUDA host is required." >&2; exit 1; }
command -v conda >/dev/null || { echo "Conda is required." >&2; exit 1; }
[[ -d "${UPSTREAM}/.git" ]] || { echo "Run setup_gsplat_cuda.sh first." >&2; exit 1; }
[[ -f "${DATASET}/sparse/0/cameras.bin" ]] || { echo "Missing COLMAP dataset: ${DATASET}" >&2; exit 1; }
[[ "${STEPS}" =~ ^[1-9][0-9]*$ ]] || { echo "Steps must be a positive integer." >&2; exit 1; }
[[ "${STRATEGY}" == "default" || "${STRATEGY}" == "mcmc" ]] || {
  echo "GSPLAT_STRATEGY must be default or mcmc." >&2
  exit 1
}

DATASET="$(cd "${DATASET}" && pwd)"
mkdir -p "${RESULT}"
RESULT="$(cd "${RESULT}" && pwd)"

cd "${UPSTREAM}"
CUDA_VISIBLE_DEVICES="${GPU}" conda run -n "${ENV_NAME}" --no-capture-output \
  python examples/simple_trainer.py "${STRATEGY}" \
    --data_dir "${DATASET}" \
    --result_dir "${RESULT}" \
    --data_factor "${DATA_FACTOR}" \
    --test_every "${TEST_EVERY}" \
    --max_steps "${STEPS}" \
    --eval_steps -1 \
    --save_steps "${STEPS}" \
    --ply_steps "${STEPS}" \
    --save_ply \
    --disable_viewer \
    --packed \
    --sparse_grad

PLY="$(find "${RESULT}/ply" -type f -name '*.ply' -print0 2>/dev/null | xargs -0 ls -t 2>/dev/null | head -1 || true)"
[[ -n "${PLY}" ]] || { echo "Training completed without a PLY export." >&2; exit 2; }
echo "Finished gsplat model: ${PLY}"
