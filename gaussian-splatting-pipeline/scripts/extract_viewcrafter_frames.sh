#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VIDEO="${1:-${ROOT}/outputs/viewcrafter/statue_dense/diffusion.mp4}"
OUTPUT="${2:-${ROOT}/data/viewcrafter/generated}"

command -v ffmpeg >/dev/null || { echo "ffmpeg is required." >&2; exit 1; }
[[ -s "${VIDEO}" ]] || { echo "Missing ViewCrafter video: ${VIDEO}" >&2; exit 1; }
if [[ -d "${OUTPUT}" ]] && find "${OUTPUT}" -type f -print -quit | grep -q .; then
  echo "Output is not empty: ${OUTPUT}" >&2
  exit 2
fi

mkdir -p "${OUTPUT}"
ffmpeg -hide_banner -loglevel error -i "${VIDEO}" -vsync 0 "${OUTPUT}/synth_%06d.png"
COUNT="$(find "${OUTPUT}" -type f -name 'synth_*.png' | wc -l | tr -d ' ')"
echo "Extracted ${COUNT} synthesized frames to ${OUTPUT}"

