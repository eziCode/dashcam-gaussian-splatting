#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VENV="${ROOT}/.venv"

if [[ ! -x "${VENV}/bin/python" ]]; then
  echo "Run ./run.sh once to install the generator dependencies." >&2
  exit 1
fi

"${VENV}/bin/python" "${ROOT}/merge.py" "$@"
