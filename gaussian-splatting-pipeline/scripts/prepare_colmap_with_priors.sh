#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CAPTURE="${1:-}"
DATASET="${2:-}"
WORK="${DATASET}/colmap-work"
IMAGES="${CAPTURE}/images"
MANIFEST="${CAPTURE}/cooperscene_manifest.json"
COLMAP_GPU="${COLMAP_GPU:-0}"

[[ -d "${IMAGES}" && -f "${MANIFEST}" && -n "${DATASET}" ]] || {
  echo "Usage: $0 PREPARED_COOPERSCENE_CAPTURE OUTPUT_DATASET" >&2
  exit 1
}
[[ ! -e "${DATASET}/sparse/0/cameras.bin" ]] || { echo "Dataset already exists: ${DATASET}" >&2; exit 2; }
command -v colmap >/dev/null || { echo "COLMAP is required (brew install colmap)." >&2; exit 1; }

mkdir -p "${WORK}"
python3 "${ROOT}/scripts/create_cooperscene_colmap_priors.py" "${MANIFEST}" "${WORK}/calibration"

CAMERA_PARAMS="$(awk '!/^#/ {print $5 "," $6 "," $7 "," $8}' "${WORK}/calibration/cameras.txt")"

colmap feature_extractor \
  --database_path "${WORK}/database.db" \
  --image_path "${IMAGES}" \
  --ImageReader.single_camera 1 \
  --ImageReader.camera_model PINHOLE \
  --ImageReader.camera_params "${CAMERA_PARAMS}" \
  --FeatureExtraction.use_gpu "${COLMAP_GPU}" \
  --FeatureExtraction.max_image_size 2000

colmap exhaustive_matcher \
  --database_path "${WORK}/database.db" \
  --FeatureMatching.use_gpu "${COLMAP_GPU}"

# Image IDs are assigned concurrently during extraction and are not guaranteed
# to follow filename order, so write the final prior model from the database.
python3 "${ROOT}/scripts/create_cooperscene_colmap_priors.py" \
  "${MANIFEST}" "${WORK}/priors" --database "${WORK}/database.db"

mkdir -p "${WORK}/triangulated"
colmap point_triangulator \
  --database_path "${WORK}/database.db" \
  --image_path "${IMAGES}" \
  --input_path "${WORK}/priors" \
  --output_path "${WORK}/triangulated"

colmap bundle_adjuster \
  --input_path "${WORK}/triangulated" \
  --output_path "${WORK}/triangulated" \
  --BundleAdjustment.refine_focal_length 1 \
  --BundleAdjustment.refine_principal_point 0 \
  --BundleAdjustment.refine_extra_params 0

colmap image_undistorter \
  --image_path "${IMAGES}" \
  --input_path "${WORK}/triangulated" \
  --output_path "${DATASET}" \
  --output_type COLMAP \
  --max_image_size 1600

python3 "${ROOT}/scripts/prepare_training_masks.py" \
  "${CAPTURE}/masks" "${DATASET}/images" "${DATASET}/masks"

if [[ -e "${DATASET}/sparse/cameras.bin" ]]; then
  mkdir -p "${DATASET}/sparse/0"
  for file in rigs.bin cameras.bin frames.bin images.bin points3D.bin; do
    [[ ! -e "${DATASET}/sparse/${file}" ]] || mv "${DATASET}/sparse/${file}" "${DATASET}/sparse/0/${file}"
  done
fi

colmap model_analyzer --path "${DATASET}/sparse/0"
echo "Prepared pose-initialized RGB-only COLMAP dataset: ${DATASET}"
