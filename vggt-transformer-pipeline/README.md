# VGGT transformer reconstruction pipeline

This pipeline uses Meta/Oxford's Visual Geometry Grounded Transformer to infer
dense depth and camera geometry directly from RGB images on Apple Silicon. It
does not train, import, or depend on Gaussian splatting code.

The output is a confidence-filtered colored surfel cloud. It is serialized with
the Gaussian PLY property names only because the existing top-level WebGL viewer
already understands that efficient point format.

## Setup

```bash
./scripts/setup_apple.sh
```

The default model is the public `facebook/VGGT-1B` checkpoint, licensed
CC BY-NC 4.0, and is suitable for this non-commercial evaluation. For product
use, accept the separate commercial checkpoint terms at
<https://huggingface.co/facebook/VGGT-1B-Commercial>, then authenticate:

```bash
.venv/bin/python -c 'from huggingface_hub import login; login()'
```

Then add `--model facebook/VGGT-1B-Commercial` to the reconstruction command.

## CooperScene example

The input path is an existing directory containing `images/`, optional
`masks/`, and calibrated `sparse/0/images.bin`. It may live anywhere.

```bash
./scripts/run_cooperscene_apple.sh \
  ../gaussian-splatting-pipeline/runs/cooperscene_demo/colmap \
  runs/cooperscene_demo/scene.ply \
  --agents 2 3

./scripts/view.sh \
  runs/cooperscene_demo/scene.ply \
  8080 \
  ../gaussian-splatting-pipeline/runs/cooperscene_demo/colmap
```

VGGT processes temporal chunks from one camera at a time, aligns each prediction
to calibrated camera centers, rejects chunks without sufficient parallax or
good alignment, applies dynamic-object masks, confidence filters inferred
depth, and voxel-fuses the accepted surfaces. A JSON provenance record is saved
beside every output scene.

## High-quality evidence-only reconstruction

The high-quality preset processes every frame from agents 2 and 3 in
eight-frame temporal windows, uses full VGGT output resolution, exports locally
oriented depth-map surfels, keeps the highest-confidence recorded color per
voxel instead of averaging misaligned colors, and uses a finer spatial grid:

```bash
./scripts/run_cooperscene_high_quality_apple.sh \
  ../gaussian-splatting-pipeline/runs/cooperscene_demo/colmap \
  runs/cooperscene_demo/scene-high-quality.ply
```

No views or pixels are generated. Agent 1 is omitted because its measured
camera motion is insufficient to recover a defensible metric depth scale.

## Time parameterization

The reconstructed road environment is static and shared across time. When a
CooperScene capture manifest is present beside the input dataset, `view.sh`
automatically exports all synchronized frames and adds a timestep slider. Each
frame records its source frame ID, available camera observations, and the
position, orientation, identity, and dimensions of every tracked vehicle.
Moving the slider changes only dynamic scene state; it does not pretend that a
different static background was measured at every instant.

## Tiny camera-only V2X-Real sample

The official camera-inclusive test archive is about 26 GB. This command uses
HTTP byte ranges to download only eight synchronized timesteps from one real
intersection scene: the front RGB camera from each of two vehicles and both
traffic-camera feeds from each of two roadside infrastructure units. Vehicle
side/rear cameras and LiDAR `.bin` members are never downloaded, and a 60 MiB
safety limit is enforced by default.

```bash
.venv/bin/python scripts/download_v2x_real_sample.py \
  data/v2x-real-tiny-mid

./scripts/run_v2x_real_apple.sh
```

Use `--frames`, `--frame-stride`, `--start-index`, and `--max-download-mb` to
change the bounded sample. The default starts near the middle of the sequence,
where the vehicle and roadside views overlap at the intersection. The output
retains the four agent directories (`1`, `2`, `-1`, `-2`)
and includes only JPEG images and their synchronized calibration YAML files.
The reconstruction preset groups both vehicle views and both roadside views at
each timestep, and records `lidarUsed: false` in the prepared camera manifest.
It places VGGT-inferred camera-local depth using the supplied RGB camera poses;
this avoids trusting a transformer-estimated camera layout across distant and
heterogeneous viewpoints while remaining strictly camera-only.
The global platform pose is composed with each optical-camera-to-platform
calibration matrix, and one shared depth scale is used across all temporal
chunks to prevent duplicated layer surfaces. Static output also requires
support from multiple chunks.
Surfel colors are resampled from the original 1920×1080 JPEGs with a restrained
detail-preserving filter rather than copied from VGGT's softer model inputs.
Each physical camera is reconstructed as its own temporal stream. A metric
depth scale is anchored from the moving front-dashcam baseline, while calibrated
poses perform the global merge; non-overlapping camera directions therefore do
not distort one another's inferred camera graph.
The high-quality preset samples every inferred depth pixel and caps each surfel
footprint below one fusion voxel to avoid blurred streaks. The viewer exports a
single static set of V2X vehicle annotations when timestep playback is disabled.
Vehicle overlays are snapped to the nearest locally reconstructed road-height
mode to compensate residual vertical monocular-depth error. Single-view RGB
surfaces are retained with bounded footprints to reduce sampling gaps without
generating content outside captured coverage.

View the completed sample with:

```bash
./scripts/view.sh \
  runs/v2x-real-mid/scene.ply 8080 runs/v2x-real-mid/prepared
```
