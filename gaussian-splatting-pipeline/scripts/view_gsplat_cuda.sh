#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
UPSTREAM="${ROOT}/third_party/gsplat"
DATASET="${1:-${ROOT}/data/statue}"
RESULT="${2:-${ROOT}/outputs/gsplat/statue}"
ENV_NAME="${GSPLAT_ENV:-gsplat}"
GPU="${GSPLAT_GPU:-0}"
PORT="${GSPLAT_PORT:-8080}"

CKPT="$(find "${RESULT}/ckpts" -type f -name '*.pt' -print0 2>/dev/null | xargs -0 ls -t 2>/dev/null | head -1 || true)"
[[ -f "${CKPT}" ]] || { echo "No gsplat checkpoint found in ${RESULT}." >&2; exit 1; }
DATASET="$(cd "${DATASET}" && pwd)"
RESULT="$(cd "${RESULT}" && pwd)"

echo "Open the viewer URL printed below; press Ctrl+C to stop."
cd "${UPSTREAM}"
CUDA_VISIBLE_DEVICES="${GPU}" conda run -n "${ENV_NAME}" --no-capture-output \
  python examples/simple_trainer.py default \
    --data_dir "${DATASET}" \
    --result_dir "${RESULT}" \
    --data_factor "${GSPLAT_DATA_FACTOR:-1}" \
    --ckpt "${CKPT}" \
    --port "${PORT}"
