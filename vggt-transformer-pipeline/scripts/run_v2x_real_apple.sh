#!/bin/bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SAMPLE="${1:-$ROOT/data/v2x-real-connected}"
OUTPUT="${2:-$ROOT/runs/v2x-real-connected/scene.ply}"
PREPARED="${3:-$ROOT/runs/v2x-real-connected/prepared}"

"$ROOT/.venv/bin/python" "$ROOT/scripts/prepare_v2x_real.py" "$SAMPLE" "$PREPARED" --max-frame 60
"$ROOT/.venv/bin/python" "$ROOT/scripts/reconstruct.py" \
  "$PREPARED" "$OUTPUT" \
  --chunk-mode timestep \
  --frame-stride 1 \
  --timesteps-per-chunk 1 \
  --chunk-overlap 0 \
  --alignment-mode calibrated-cameras \
  --calibrated-depth-scale 2.0 \
  --original-rgb-colors \
  --confidence-percentile 60 \
  --pixel-stride 1 \
  --voxel-size 0.0025 \
  --max-points 2000000 \
  --min-chunk-support 1 \
  --support-voxel-size 0.02 \
  --min-camera-span 0.002 \
  --max-point-distance 2.0 \
  --max-relative-depth-gradient 0.12

echo "Transformer scene: $OUTPUT"
