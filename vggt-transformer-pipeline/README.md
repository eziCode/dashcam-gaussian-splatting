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
