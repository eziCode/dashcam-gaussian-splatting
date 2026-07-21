#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VENV="${ROOT}/.venv"
UPSTREAM="${ROOT}/third_party/vggt"
REVISION="a288dd0f14786c93483e45524328726ab7b1b4ce"

[[ "$(uname -m)" == "arm64" ]] || { echo "Apple Silicon is required." >&2; exit 1; }
if [[ ! -x "${VENV}/bin/python" ]]; then
  python3 -m venv --system-site-packages "${VENV}"
fi

if [[ -d "${UPSTREAM}/.git" ]]; then
  git -C "${UPSTREAM}" checkout --detach "${REVISION}"
else
  git clone https://github.com/facebookresearch/vggt.git "${UPSTREAM}"
  git -C "${UPSTREAM}" checkout --detach "${REVISION}"
fi

"${VENV}/bin/python" -m pip install einops huggingface_hub safetensors torchvision==0.24.0 plyfile numpy pillow
"${VENV}/bin/python" - <<'PY'
import torch
import einops
print(f"PyTorch {torch.__version__}; MPS built: {torch.backends.mps.is_built()}")
print("VGGT dependencies are ready.")
PY

cat <<'TXT'
VGGT setup complete.

The default facebook/VGGT-1B checkpoint is public and licensed CC BY-NC 4.0.
For commercial/product deployment, the separate commercial checkpoint is gated:
  1. Accept its terms at https://huggingface.co/facebook/VGGT-1B-Commercial
  2. Run: .venv/bin/python -c 'from huggingface_hub import login; login()'
  3. Pass: --model facebook/VGGT-1B-Commercial
TXT
