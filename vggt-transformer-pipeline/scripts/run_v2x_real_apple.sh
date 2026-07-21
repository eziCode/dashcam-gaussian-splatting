#!/bin/bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SAMPLE="${1:-$ROOT/data/v2x-real-tiny-mid}"
OUTPUT="${2:-$ROOT/runs/v2x-real-mid/scene.ply}"
PREPARED="${3:-$ROOT/runs/v2x-real-mid/prepared}"

"$ROOT/.venv/bin/python" "$ROOT/scripts/prepare_v2x_real.py" "$SAMPLE" "$PREPARED"
"$ROOT/.venv/bin/python" "$ROOT/scripts/reconstruct.py" \
  "$PREPARED" "$OUTPUT" \
  --chunk-mode timestep \
  --frame-stride 1 \
  --timesteps-per-chunk 1 \
  --chunk-overlap 0 \
  --alignment-mode calibrated-cameras \
  --calibrated-depth-scale 1.79 \
  --confidence-percentile 70 \
  --pixel-stride 1 \
  --voxel-size 0.0025 \
  --max-points 1200000 \
  --min-chunk-support 2 \
  --support-voxel-size 0.02 \
  --min-camera-span 0.01

echo "Transformer scene: $OUTPUT"
