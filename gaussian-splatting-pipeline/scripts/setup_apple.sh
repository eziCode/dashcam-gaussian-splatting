#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REPO_ROOT="$(cd "${ROOT}/.." && pwd)"
VENV="${ROOT}/.venv-apple"
UPSTREAM="${ROOT}/third_party/splat-apple"
REVISION="bdc574338446b8394e4817b3548e75f25d463176"

if [[ "$(uname -m)" != "arm64" ]]; then
  echo "Apple Silicon (arm64) is required." >&2
  exit 1
fi

if [[ -d "${UPSTREAM}/.git" ]]; then
  git -C "${UPSTREAM}" checkout --detach "${REVISION}"
elif [[ -f "${UPSTREAM}/train_mlx.py" ]]; then
  echo "Using vendored splat-apple source: ${UPSTREAM}"
else
  mkdir -p "${ROOT}/third_party"
  git clone https://github.com/ghif/splat-apple.git "${UPSTREAM}"
  git -C "${UPSTREAM}" checkout --detach "${REVISION}"
fi

if [[ ! -x "${VENV}/bin/python" ]]; then
  python3 -m venv --system-site-packages "${VENV}"
fi

"${VENV}/bin/python" -m pip install -r "${REPO_ROOT}/requirements-apple.txt"
(
  cd "${UPSTREAM}"
  "${VENV}/bin/python" setup_mlx.py build_ext --inplace
  # The upstream MLX COLMAP loader currently imports a shared PyTorch parser,
  # whose package import requires these bridge extensions.
  "${VENV}/bin/python" setup.py build_ext --inplace
)

"${VENV}/bin/python" - <<'PY'
import mlx.core as mx
import torch
print(f"MLX default device: {mx.default_device()}")
print(f"PyTorch available for COLMAP loader: {torch.__version__}")
PY

echo "Apple MLX environment is ready."
