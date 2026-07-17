#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
UPSTREAM="${ROOT}/third_party/ViewCrafter"
INPUT="${1:-${ROOT}/data/viewcrafter/input}"
OUTPUT="${2:-${ROOT}/outputs/viewcrafter}"
STEPS="${VIEWCRAFTER_STEPS:-50}"
SEED="${VIEWCRAFTER_SEED:-123}"
BG_THRESHOLD="${VIEWCRAFTER_BG_THRESHOLD:-0.2}"
ENV_NAME="${VIEWCRAFTER_ENV:-viewcrafter}"

command -v nvidia-smi >/dev/null || { echo "A CUDA host is required." >&2; exit 1; }
command -v conda >/dev/null || { echo "Conda is required." >&2; exit 1; }
[[ -d "${INPUT}" ]] || { echo "Missing input directory: ${INPUT}" >&2; exit 1; }
[[ -f "${INPUT}/../input_manifest.json" ]] || { echo "Missing input manifest." >&2; exit 1; }
[[ -f "${UPSTREAM}/checkpoints/model_sparse.ckpt" ]] || { echo "Run setup_viewcrafter_cuda.sh first." >&2; exit 1; }

INPUT="$(cd "${INPUT}" && pwd)"
mkdir -p "${OUTPUT}"
OUTPUT="$(cd "${OUTPUT}" && pwd)"

(
  cd "${UPSTREAM}"
  conda run -n "${ENV_NAME}" python inference.py \
    --image_dir "${INPUT}" \
    --out_dir "${OUTPUT}" \
    --exp_name statue_dense \
    --mode sparse_view_interp \
    --bg_trd "${BG_THRESHOLD}" \
    --seed "${SEED}" \
    --ckpt_path checkpoints/model_sparse.ckpt \
    --config configs/inference_pvd_1024.yaml \
    --ddim_steps "${STEPS}" \
    --video_length 25 \
    --device cuda:0 \
    --height 576 --width 1024 \
    --model_path checkpoints/DUSt3R_ViTLarge_BaseDecoder_512_dpt.pth
)

test -s "${OUTPUT}/statue_dense/diffusion.mp4"
echo "Generated views: ${OUTPUT}/statue_dense/diffusion.mp4"
