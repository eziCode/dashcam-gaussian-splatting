#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VENV="${ROOT}/.venv"

if [[ $# -lt 1 || $# -gt 2 ]]; then
  echo "Usage: $0 CAPTURE_DIRECTORY_OR_ZIP [OUTPUT.ply]" >&2
  exit 1
fi

INPUT="$1"
OUTPUT="${2:-${ROOT}/output/scene.ply}"

if [[ ! -x "${VENV}/bin/python" ]]; then
  if command -v python3.12 >/dev/null 2>&1; then
    PYTHON=python3.12
  else
    PYTHON=python3
  fi
  "${PYTHON}" -m venv "${VENV}"
  "${VENV}/bin/pip" install -r "${ROOT}/requirements.txt"
fi

"${VENV}/bin/python" "${ROOT}/generate.py" "${INPUT}" "${OUTPUT}"
