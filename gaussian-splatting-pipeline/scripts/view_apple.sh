#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VENV="${ROOT}/.venv-apple"
WEB_ROOT="${ROOT}/../splat-web-viewer"
PLY="${1:-}"
PORT="${2:-8080}"
DATASET="${3:-}"

if [[ ! -x "${VENV}/bin/python" ]]; then
  echo "Run scripts/setup_apple.sh first." >&2
  exit 1
fi

if [[ -z "${PLY}" ]]; then
  PLY="$(find "${ROOT}/outputs/results" -type f -name '*_final.ply' -print0 2>/dev/null | xargs -0 ls -t 2>/dev/null | head -1 || true)"
fi

if [[ -z "${PLY}" || ! -f "${PLY}" ]]; then
  echo "No trained PLY found. Pass one as the first argument." >&2
  exit 2
fi

PLY="$(cd "$(dirname "${PLY}")" && pwd)/$(basename "${PLY}")"
DENSE_PLY="$(dirname "${PLY}")/arkit-dataset_dense-filled.ply"
if [[ "${PLY}" != "${DENSE_PLY}" && -f "${DENSE_PLY}" ]]; then
  echo "Using dense measured underlay: ${DENSE_PLY}"
  PLY="${DENSE_PLY}"
fi
if [[ -z "${DATASET}" && "${PLY}" == */training/results/* ]]; then
  RUN_ROOT="${PLY%%/training/results/*}"
  for candidate in "${RUN_ROOT}/arkit-dataset" "${RUN_ROOT}/colmap"; do
    if [[ -f "${candidate}/sparse/0/images.bin" ]]; then
      DATASET="${candidate}"
      break
    fi
  done
fi

if [[ -z "${DATASET}" ]]; then
  echo "A COLMAP/ARKit dataset is required for smooth guided navigation." >&2
  echo "Pass it as the third argument." >&2
  exit 3
fi
command -v npm >/dev/null || { echo "npm is required for the guided web viewer." >&2; exit 4; }
[[ -d "${WEB_ROOT}/node_modules" ]] || { echo "Run npm install in ${WEB_ROOT} first." >&2; exit 4; }

DATASET="$(cd "${DATASET}" && pwd)"
RUNTIME="${WEB_ROOT}/public/runtime"
mkdir -p "${RUNTIME}"
cp "${PLY}" "${RUNTIME}/model.ply"
"${VENV}/bin/python" "${ROOT}/scripts/export_camera_path.py" \
  "${DATASET}" "${RUNTIME}/camera-path.json"

CACHE_BUSTER="$(date +%s)"
export VITE_GUIDED_MODE=1
export VITE_SCENE_URL="/runtime/model.ply?v=${CACHE_BUSTER}"
echo "Open http://localhost:${PORT}/"
cd "${WEB_ROOT}"
exec npm run dev -- --host 127.0.0.1 --port "${PORT}" --strictPort
