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

## RGB-only iPhone reconstruction on a Mac

LiDAR is optional for the trained reconstruction path. The iPhone app now
records RGB images, camera intrinsics, ARKit visual-inertial poses, and
timestamps on any ARKit-capable iPhone. LiDAR devices additionally retain the
existing depth and confidence files.

Export a capture ZIP from the app, then run the complete CPU COLMAP + Apple MLX
pipeline:

```bash
cd gaussian-splatting-pipeline
./scripts/setup_apple.sh
./scripts/run_iphone_apple.sh ~/Downloads/20260720-120000.zip my_room 3 2000
./scripts/view_apple.sh
```

The arguments after the ZIP are the unique run name, frame stride, and MLX
training iterations. A stride of 3 turns the app's roughly 10 FPS capture into
about 3.3 images per second, reducing redundant COLMAP work. Each run is kept
under `runs/<run-name>/` and is never overwritten.

The converter rotates the ARKit calibration to match the JPEG orientation and
uses it to initialize a shared COLMAP PINHOLE camera. COLMAP still estimates
and refines camera poses from image overlap; the exported ARKit poses remain in
`capture_manifest.json` for validation and future pose-prior integration.

For the best reconstruction, lock the phone to one rear lens, move slowly,
keep each surface visible from several viewpoints, avoid motion blur, and make
a wide loop rather than rotating from one spot. RGB-only reconstruction needs
texture and parallax; blank walls, reflections, and moving subjects remain
difficult.

The final viewer-compatible PLY is written below `outputs/results/`. Progress
renders are saved alongside it. The viewer serves an interactive page at
`http://localhost:8080`. The preparation step is intentionally
non-destructive and refuses to overwrite an existing reconstruction.

## Synchronized multi-dashcam reconstruction with CooperScene

The CooperScene integration is RGB-only. It reads synchronized
`*_camera*.png` observations from multiple agents and never reads the dataset's
PCD/LiDAR files. Each exported image retains its global frame ID, agent ID,
camera ID, role, and annotation path in `timeline.json` so later crash playback
can keep dynamic observations aligned with the static reconstruction.

Because short traffic clips often contain stopped vehicles and little visual
parallax, the CooperScene path initializes camera placement from the dataset's
calibrated platform poses and RGB camera-to-platform transforms. COLMAP then
triangulates and bundle-adjusts those cameras using RGB feature matches. This
does not use LiDAR ranges or point clouds. For consumer footage, GPS/IMU can
provide the same optional initialization; sufficiently varied video falls back
to visual pose recovery.

Download and extract the official CooperScene mini set, then run on Apple
Silicon:

```bash
cd gaussian-splatting-pipeline
./scripts/setup_apple.sh
./scripts/run_cooperscene_apple.sh data/cooperscene-mini cooperscene_demo train '' 1 180 2000
```

The mini set contains three synchronized front-facing vehicle cameras. In the
currently published core archive, agent 0 (the roadside unit) is LiDAR-only,
so it cannot supply a roadside RGB observation. The adapter automatically
accepts additional camera-equipped agents in the same CooperScene directory
layout and supports `--infrastructure-agent ID` when roadside RGB becomes
available.

The CooperScene path also projects its metric vehicle boxes into per-frame RGB
validity masks. The Apple trainer excludes those pixels from the static-scene
loss and keeps the tracked vehicles in `timeline.json` for independent
timestep playback. Its stable topology schedule replaces high-gradient parent
Gaussians with smaller children, prunes transparent/pathological points,
regularizes scale and anisotropy, resets runaway opacity, stops densifying
before the final refinement stage, and balances samples across camera agents.
This prevents moving traffic from being baked into the background splat and
avoids turning sparse reconstruction errors into large colored clouds.

For a clean CooperScene retrain, 3,000 iterations uses the conservative Apple
defaults (8% splitting, a 250k point ceiling, and densification ending at
iteration 1,800):

```bash
./scripts/train_apple.sh \
  runs/cooperscene_demo/colmap \
  3000 \
  runs/cooperscene_demo/training_stable
```

Extra trainer flags can be passed after the output directory. For example,
`--max-scale 0.018 --max-gaussians 200000` produces a still more conservative
model when colored fog is more objectionable than small holes.

The custom viewer starts at a recorded camera pose and constrains movement to
a narrow `0.10`-radius corridor around measured camera positions. It caps the
largest two percent of Gaussian radii at load time instead of stretching them
across unobserved space. CooperScene runs additionally show a timeline slider
and colored tracked-vehicle boxes. These boxes are an explicit evidence layer,
not synthesized vehicle appearance.

For a fast ingestion check without COLMAP or training:

```bash
python3 scripts/prepare_cooperscene_rgb.py \
  data/cooperscene-mini /tmp/cooperscene-rgb --max-timesteps 10
```

## Satellite context for accident locations

Satellite imagery is rendered as a separate, replaceable ground plane rather
than being baked into evidentiary splats. For U.S. coordinates the helper uses
the public USGS NAIP orthophoto service; a licensed local image can be supplied
for other providers or countries.

```bash
python3 scripts/prepare_satellite_context.py \
  runs/CLAIM/colmap runs/CLAIM/geo \
  --latitude 33.975738 --longitude -117.339850 \
  --radius-meters 120 --heading-degrees 0
```

`view_apple.sh` detects `runs/CLAIM/geo` automatically, displays the required
attribution, and labels it contextual rather than contemporaneous evidence.
Map alignment can be tuned live with URL parameters such as
`?geoHeading=90&geoX=0.1&geoY=-0.05&geoZ=0.12&geoScale=1.0&geoOpacity=.92`.
Once aligned, copy those values into `geo-context.json` for the claim record.

## What the pipeline does

1. Extracts and sequentially matches SIFT features using COLMAP on CPU.
2. Estimates camera poses and a sparse point cloud.
3. Undistorts registered images to 1600 pixels and converts cameras to PINHOLE.
4. Initializes Gaussians from the COLMAP point cloud.
5. Optimizes them through the pinned `splat-apple` MLX/Metal rasterizer.
6. Exports a standard Gaussian Splat PLY.

## Scope

`splat-apple` is a young community implementation. This repository adds a
conservative adaptive topology schedule, but it still lacks several advanced
features of mature trainers. It is appropriate for a fully local Apple
workflow; reconstruction quality remains bounded by real multiview overlap and
the accuracy of the RGB-only geometry.

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
