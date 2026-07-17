#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VENV="${ROOT}/.venv-apple"
UPSTREAM="${ROOT}/third_party/splat-apple"
PLY="${1:-}"
PORT="${2:-8080}"

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
echo "Open http://localhost:${PORT} in a browser."
"${VENV}/bin/python" "${UPSTREAM}/viewer_ply.py" "${PLY}" --port "${PORT}"

