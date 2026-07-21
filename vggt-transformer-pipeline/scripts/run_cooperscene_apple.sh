#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REPO_ROOT="$(cd "${ROOT}/.." && pwd)"
DATASET="${1:-${REPO_ROOT}/gaussian-splatting-pipeline/runs/cooperscene_demo/colmap}"
OUTPUT="${2:-${ROOT}/runs/cooperscene_demo/scene.ply}"

[[ -x "${ROOT}/.venv/bin/python" ]] || { echo "Run scripts/setup_apple.sh first." >&2; exit 1; }
[[ -d "${ROOT}/third_party/vggt/vggt" ]] || { echo "Run scripts/setup_apple.sh first." >&2; exit 2; }

mkdir -p "$(dirname "${OUTPUT}")"
PYTHONPATH="${ROOT}/third_party/vggt" \
  "${ROOT}/.venv/bin/python" "${ROOT}/scripts/reconstruct.py" \
  "${DATASET}" "${OUTPUT}" "${@:3}"

echo "Transformer scene: ${OUTPUT}"
echo "View with: ./scripts/view.sh '${OUTPUT}' 8080 '${DATASET}'"
