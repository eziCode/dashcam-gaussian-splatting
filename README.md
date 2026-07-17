# Gaussian Splatting reconstruction pipeline

This project reconstructs the dense statue capture with COLMAP, then trains a
Gaussian Splat locally with MLX and Metal on an Apple Silicon Mac.

## Recommended CUDA training with gsplat

The CUDA path uses the official gsplat COLMAP trainer with adaptive
densification and pruning. Unlike the compact Apple baseline, the Gaussian
count grows beyond the initial sparse COLMAP points and can represent the
background.

On a fresh Linux CUDA machine, prepare the real-image dataset if `data/` was
not copied, then install and train:

```bash
COLMAP_GPU=1 ./scripts/prepare_colmap.sh images_dense data/statue sequential
./scripts/setup_gsplat_cuda.sh
./scripts/train_gsplat_cuda.sh data/statue outputs/gsplat/statue 30000
./scripts/view_gsplat_cuda.sh data/statue outputs/gsplat/statue
```

The final PLY is saved under `outputs/gsplat/statue/ply/`. It can also be
opened directly in SuperSplat. Set `GSPLAT_DATA_FACTOR=2` if VRAM is limited;
set `GSPLAT_STRATEGY=mcmc` to use gsplat's MCMC densification strategy.

The setup defaults to PyTorch 2.9.1 with CUDA 12.8 wheels. Override
`GSPLAT_TORCH_INDEX_URL` when the CUDA host requires another official PyTorch
wheel index.

## Run

```bash
./scripts/setup_apple.sh
./scripts/prepare_colmap.sh
./scripts/train_apple.sh
./scripts/view_apple.sh
```

The optional training arguments are the dataset path and iteration count:

```bash
./scripts/train_apple.sh data/statue 2000
```

The final viewer-compatible PLY is written below `outputs/results/`. Progress
renders are saved alongside it. The viewer serves an interactive page at
`http://localhost:8080`. The preparation step is intentionally
non-destructive and refuses to overwrite an existing reconstruction.

## What the pipeline does

1. Extracts and sequentially matches SIFT features using COLMAP on CPU.
2. Estimates camera poses and a sparse point cloud.
3. Undistorts registered images to 1600 pixels and converts cameras to PINHOLE.
4. Initializes Gaussians from the COLMAP point cloud.
5. Optimizes them through the pinned `splat-apple` MLX/Metal rasterizer.
6. Exports a standard Gaussian Splat PLY.

## Scope

`splat-apple` is a young community implementation. Its current trainer does not
include the adaptive Gaussian densification and pruning used by mature CUDA
trainers such as gsplat/Splatfacto. It is appropriate for proving the fully
local Apple workflow, but a CUDA trainer remains the quality baseline.

The four files in `images_sparse` do not have enough verified overlap for
classical pose recovery. Use `images_dense` for this experiment.

## Optional ViewCrafter augmentation (Linux + CUDA)

ViewCrafter can synthesize interpolated views before reconstruction. Generated
pixels are hypotheses, not measurements, so keep the real-only reconstruction
as the quality baseline. The integration pins the official ViewCrafter source
and preserves real/synthetic provenance in a manifest.

Stride 4 is the recommended first experiment; use stride 1 to condition on
every unique dense image. Run this wherever `images_dense` is available:

```bash
python3 scripts/prepare_viewcrafter_inputs.py \
  --images images_dense --output data/viewcrafter/input --stride 4
```

After pushing the repository to a Linux CUDA machine, run the preparation there
if the ignored `data/` directory was not copied, then execute inference:

```bash
python3 scripts/prepare_viewcrafter_inputs.py \
  --images images_dense --output data/viewcrafter/input --stride 4
./scripts/setup_viewcrafter_cuda.sh
./scripts/run_viewcrafter_cuda.sh
./scripts/extract_viewcrafter_frames.sh
python3 scripts/build_augmented_images.py
COLMAP_GPU=1 ./scripts/prepare_colmap.sh \
  data/viewcrafter/augmented data/statue_augmented exhaustive
```

After copying `data/statue_augmented` back to the M4 Mac:

```bash
./scripts/setup_apple.sh
./scripts/train_apple.sh data/statue_augmented 2000
./scripts/view_apple.sh
```

Environment overrides include `VIEWCRAFTER_STEPS`, `VIEWCRAFTER_SEED`,
`VIEWCRAFTER_BG_THRESHOLD`, and `VIEWCRAFTER_ENV`. The upstream 25-frame model
uses about 23.5 GB of NVIDIA GPU memory at 576x1024 resolution.

### One-command ViewCrafter + gsplat run

After both CUDA environments are installed, the complete augmented pipeline is:

```bash
./scripts/setup_viewcrafter_cuda.sh
./scripts/setup_gsplat_cuda.sh
./scripts/run_viewcrafter_gsplat_cuda.sh images_dense statue_augmented 4 30000
```

Arguments are input images, unique run name, ViewCrafter input stride, and
gsplat training steps. Results are isolated under `runs/<run-name>/`; reruns
never overwrite an earlier experiment. The final PLY is under
`runs/<run-name>/gsplat/ply/`.

For a faster smoke test:

```bash
VIEWCRAFTER_STEPS=10 GSPLAT_DATA_FACTOR=2 \
  ./scripts/run_viewcrafter_gsplat_cuda.sh images_dense smoke 8 7000
```
