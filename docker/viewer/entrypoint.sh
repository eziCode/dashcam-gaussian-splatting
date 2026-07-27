#!/bin/sh
set -eu

PLY="${V2X_PLY:-/workspace/vggt-transformer-pipeline/runs/v2x-real-mid/scene.ply}"
DATASET="${V2X_DATASET:-/workspace/vggt-transformer-pipeline/runs/v2x-real-mid/prepared}"
RUNTIME=/app/site/runtime

if [ ! -f "$PLY" ]; then
  echo "Scene PLY not found: $PLY" >&2
  exit 2
fi
if [ ! -f "$DATASET/cameras.json" ] && [ ! -f "$DATASET/sparse/0/images.bin" ]; then
  echo "Calibrated camera data not found: $DATASET" >&2
  exit 3
fi

mkdir -p "$RUNTIME"
ln -sf "$PLY" "$RUNTIME/model.ply"

PROVENANCE="${PLY%.*}.json"
if [ -f "$PROVENANCE" ]; then
  python /app/scripts/export_camera_path.py "$DATASET" "$RUNTIME/camera-path.json" \
    --scene "$PLY" --provenance "$PROVENANCE"
else
  python /app/scripts/export_camera_path.py "$DATASET" "$RUNTIME/camera-path.json" --scene "$PLY"
fi

if [ -f "$DATASET/cameras.json" ]; then
  python /app/scripts/export_v2x_boxes.py "$DATASET" "$RUNTIME/timeline.json" --scene "$PLY"
else
  printf '{"frameCount":0,"frames":[]}\n' > "$RUNTIME/timeline.json"
fi

echo "V2X viewer ready at http://localhost:8080"
exec nginx -g 'daemon off;'
