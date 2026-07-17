#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
UPSTREAM="${ROOT}/third_party/ViewCrafter"
REVISION="97cdb8634b28708cbd50912d57c52f23c5ffbf09"
ENV_NAME="${VIEWCRAFTER_ENV:-viewcrafter}"

if [[ "$(uname -s)" != "Linux" ]]; then
  echo "ViewCrafter setup requires Linux with an NVIDIA CUDA GPU." >&2
  exit 1
fi
command -v nvidia-smi >/dev/null || { echo "nvidia-smi is required." >&2; exit 1; }
command -v conda >/dev/null || { echo "Conda is required." >&2; exit 1; }

if [[ ! -d "${UPSTREAM}/.git" ]]; then
  mkdir -p "${ROOT}/third_party"
  git clone https://github.com/Drexubery/ViewCrafter.git "${UPSTREAM}"
fi
git -C "${UPSTREAM}" checkout --detach "${REVISION}"

if ! conda env list | awk '{print $1}' | grep -qx "${ENV_NAME}"; then
  conda create -n "${ENV_NAME}" python=3.9.16 -y
fi

conda run -n "${ENV_NAME}" python -m pip install -r "${UPSTREAM}/requirements.txt"
conda install -n "${ENV_NAME}" -y \
  https://anaconda.org/pytorch3d/pytorch3d/0.7.5/download/linux-64/pytorch3d-0.7.5-py39_cu117_pyt1131.tar.bz2

mkdir -p "${UPSTREAM}/checkpoints"
(
cd "${ROOT}"
conda run -n "${ENV_NAME}" python - <<'PY'
from pathlib import Path
from urllib.request import urlretrieve

downloads = {
    "DUSt3R_ViTLarge_BaseDecoder_512_dpt.pth": "https://download.europe.naverlabs.com/ComputerVision/DUSt3R/DUSt3R_ViTLarge_BaseDecoder_512_dpt.pth",
    "model_sparse.ckpt": "https://huggingface.co/Drexubery/ViewCrafter_25_sparse/resolve/main/model_sparse.ckpt",
}
root = Path("third_party/ViewCrafter/checkpoints")
for filename, url in downloads.items():
    target = root / filename
    if not target.exists():
        print(f"Downloading {filename}...")
        urlretrieve(url, target)
PY
)

conda run -n "${ENV_NAME}" python - <<'PY'
import torch
assert torch.cuda.is_available(), "PyTorch cannot see a CUDA GPU"
print("CUDA:", torch.version.cuda, torch.cuda.get_device_name(0))
PY
echo "ViewCrafter CUDA environment is ready."
