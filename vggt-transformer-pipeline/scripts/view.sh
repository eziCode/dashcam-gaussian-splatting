#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REPO_ROOT="$(cd "${ROOT}/.." && pwd)"
WEB_ROOT="${REPO_ROOT}/splat-web-viewer"
PLY="${1:-${ROOT}/runs/cooperscene_demo/scene.ply}"
PORT="${2:-8080}"
DATASET="${3:-${REPO_ROOT}/gaussian-splatting-pipeline/runs/cooperscene_demo/colmap}"

[[ -f "${PLY}" ]] || { echo "Transformer surfel PLY not found: ${PLY}" >&2; exit 1; }
[[ -f "${DATASET}/sparse/0/images.bin" || -f "${DATASET}/cameras.json" ]] || { echo "Calibrated camera poses not found: ${DATASET}" >&2; exit 2; }
[[ -x "${ROOT}/.venv/bin/python" ]] || { echo "Run scripts/setup_apple.sh first." >&2; exit 3; }
command -v npm >/dev/null || { echo "npm is required." >&2; exit 4; }
[[ -d "${WEB_ROOT}/node_modules" ]] || { echo "Run npm install in splat-web-viewer first." >&2; exit 5; }

RUNTIME="${WEB_ROOT}/public/runtime"
mkdir -p "${RUNTIME}"
cp "${PLY}" "${RUNTIME}/model.ply"
PROVENANCE="${PLY%.*}.json"
CAMERA_COMMAND=("${ROOT}/.venv/bin/python" "${ROOT}/scripts/export_camera_path.py" \
  "${DATASET}" "${RUNTIME}/camera-path.json" --scene "${PLY}")
if [[ -f "${PROVENANCE}" ]]; then
  CAMERA_COMMAND+=(--provenance "${PROVENANCE}")
fi
"${CAMERA_COMMAND[@]}"

export VITE_GUIDED_MODE=1
export VITE_SCENE_URL="/runtime/model.ply?v=$(date +%s)"
RUN_ROOT="$(cd "${DATASET}/.." && pwd)"
MANIFEST="${RUN_ROOT}/capture/cooperscene_manifest.json"
if [[ -f "${MANIFEST}" ]]; then
  "${ROOT}/.venv/bin/python" "${ROOT}/scripts/export_timeline.py" \
    "${DATASET}" "${MANIFEST}" "${RUNTIME}/timeline.json"
  export VITE_TIMELINE_URL="/runtime/timeline.json"
elif [[ -f "${DATASET}/cameras.json" ]]; then
  "${ROOT}/.venv/bin/python" "${ROOT}/scripts/export_v2x_boxes.py" \
    "${DATASET}" "${RUNTIME}/timeline.json"
  export VITE_TIMELINE_URL="/runtime/timeline.json"
else
  export VITE_TIMELINE_URL=""
fi
export VITE_GEO_CONTEXT_URL=""
echo "Open http://localhost:${PORT}/"
cd "${WEB_ROOT}"
exec npm run dev -- --host 127.0.0.1 --port "${PORT}" --strictPort
