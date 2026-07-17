#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
UPSTREAM="${ROOT}/third_party/gsplat"
REVISION="77ab983ffe43420b2131669cb35776b883ca4c3c"
ENV_NAME="${GSPLAT_ENV:-gsplat}"
TORCH_INDEX="${GSPLAT_TORCH_INDEX_URL:-https://download.pytorch.org/whl/cu128}"

if [[ "$(uname -s)" != "Linux" ]]; then
  echo "gsplat CUDA setup requires Linux." >&2
  exit 1
fi
command -v nvidia-smi >/dev/null || { echo "nvidia-smi is required." >&2; exit 1; }
command -v conda >/dev/null || { echo "Conda is required." >&2; exit 1; }

if [[ ! -d "${UPSTREAM}/.git" ]]; then
  mkdir -p "${ROOT}/third_party"
  git clone https://github.com/nerfstudio-project/gsplat.git "${UPSTREAM}"
fi
git -C "${UPSTREAM}" checkout --detach "${REVISION}"

if ! conda env list | awk '{print $1}' | grep -qx "${ENV_NAME}"; then
  conda create -n "${ENV_NAME}" python=3.11 -y
fi

conda run -n "${ENV_NAME}" python -m pip install --upgrade pip setuptools wheel ninja
conda run -n "${ENV_NAME}" python -m pip install \
  torch==2.9.1 torchvision==0.24.1 --index-url "${TORCH_INDEX}"
conda run -n "${ENV_NAME}" python -m pip install -e "${UPSTREAM}" --no-build-isolation
conda run -n "${ENV_NAME}" python -m pip install \
  -r "${UPSTREAM}/examples/requirements.txt" --no-build-isolation

# Exercise the rasterizer once so CUDA compilation problems happen during
# setup rather than several minutes into training.
conda run -n "${ENV_NAME}" python - <<'PY'
import torch
from gsplat.rendering import rasterization

assert torch.cuda.is_available(), "PyTorch cannot see a CUDA GPU"
device = torch.device("cuda")
means = torch.tensor([[0.0, 0.0, 2.0]], device=device)
quats = torch.tensor([[1.0, 0.0, 0.0, 0.0]], device=device)
scales = torch.tensor([[0.1, 0.1, 0.1]], device=device)
opacities = torch.tensor([0.9], device=device)
colors = torch.tensor([[1.0, 0.0, 0.0]], device=device)
viewmats = torch.eye(4, device=device)[None]
Ks = torch.tensor([[[100.0, 0.0, 32.0], [0.0, 100.0, 32.0], [0.0, 0.0, 1.0]]], device=device)
rasterization(means, quats, scales, opacities, colors, viewmats, Ks, 64, 64)
torch.cuda.synchronize()
print("CUDA:", torch.version.cuda, torch.cuda.get_device_name(0))
print("gsplat rasterizer smoke test passed")
PY

echo "gsplat CUDA environment is ready."

