#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
IMAGES="${1:-${ROOT}/images_dense}"
DATASET="${2:-${ROOT}/data/statue}"
WORK="${DATASET}/colmap-work"
MATCHER="${3:-sequential}"
COLMAP_GPU="${COLMAP_GPU:-0}"

command -v colmap >/dev/null || {
  echo "COLMAP is required (brew install colmap)." >&2
  exit 1
}

if [[ ! -d "${IMAGES}" ]]; then
  echo "Image directory does not exist: ${IMAGES}" >&2
  exit 1
fi

if [[ -e "${DATASET}/sparse/0/cameras.bin" ]]; then
  echo "Dataset already exists: ${DATASET}"
  echo "Move it aside before rebuilding." >&2
  exit 2
fi

mkdir -p "${WORK}/sparse" "${DATASET}"

colmap feature_extractor \
  --database_path "${WORK}/database.db" \
  --image_path "${IMAGES}" \
  --ImageReader.single_camera 1 \
  --ImageReader.camera_model OPENCV \
  --FeatureExtraction.use_gpu "${COLMAP_GPU}" \
  --FeatureExtraction.max_image_size 2000

case "${MATCHER}" in
  sequential)
    colmap sequential_matcher \
      --database_path "${WORK}/database.db" \
      --FeatureMatching.use_gpu "${COLMAP_GPU}" \
      --SequentialMatching.overlap 8
    ;;
  exhaustive)
    colmap exhaustive_matcher \
      --database_path "${WORK}/database.db" \
      --FeatureMatching.use_gpu "${COLMAP_GPU}"
    ;;
  *)
    echo "Matcher must be 'sequential' or 'exhaustive'." >&2
    exit 1
    ;;
esac

colmap mapper \
  --database_path "${WORK}/database.db" \
  --image_path "${IMAGES}" \
  --output_path "${WORK}/sparse" \
  --Mapper.multiple_models 0 \
  --Mapper.min_model_size 3

if [[ ! -e "${WORK}/sparse/0/cameras.bin" ]]; then
  echo "COLMAP did not produce a reconstruction." >&2
  exit 3
fi

# This both removes lens distortion and converts the OPENCV camera to the
# PINHOLE representation supported by splat-apple.
colmap image_undistorter \
  --image_path "${IMAGES}" \
  --input_path "${WORK}/sparse/0" \
  --output_path "${DATASET}" \
  --output_type COLMAP \
  --max_image_size 1600

# COLMAP 4.x writes the undistorted model directly in sparse/. Normalize it to
# the sparse/0 layout used by Gaussian Splatting loaders.
if [[ -e "${DATASET}/sparse/cameras.bin" ]]; then
  mkdir -p "${DATASET}/sparse/0"
  for file in rigs.bin cameras.bin frames.bin images.bin points3D.bin; do
    if [[ -e "${DATASET}/sparse/${file}" ]]; then
      mv "${DATASET}/sparse/${file}" "${DATASET}/sparse/0/${file}"
    fi
  done
fi

colmap model_analyzer --path "${DATASET}/sparse/0"
echo "Prepared COLMAP dataset: ${DATASET}"
