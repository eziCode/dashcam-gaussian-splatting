# Splat cloud generator prototype

This directory is a local stand-in for a future cloud reconstruction worker. It accepts either the complete timestamped capture folder produced by the Swift app, its ZIP archive, or an existing colored point-cloud PLY. It outputs a standard binary Gaussian-splat PLY that MetalSplatter can render on the iPhone.

No neural network is trained or fine-tuned. The worker uses Open3D to fuse and filter the metric LiDAR samples, estimate local surface normals and spacing, and initialize one oriented Gaussian per retained surface sample. Colors come from the synchronized iPhone camera frames.

## Run locally

In the iPhone Files app, compress a timestamped folder from `On My iPhone/iPhoneLIDAR/LiDARCaptures`, AirDrop the ZIP to the Mac, then run:

```bash
cd splat-cloud-generator
chmod +x run.sh
./run.sh ~/Downloads/20260717-001234.zip output/my-room.ply
```

The first run creates a private Python 3.12 virtual environment and installs pinned dependencies. Subsequent runs reuse it. Open3D does not currently publish a macOS wheel for Python 3.13, so install Python 3.12 with `brew install python@3.12` if it is unavailable.

AirDrop `output/my-room.ply` back to the iPhone and select it with the current developer **Open Gaussian Splat** control. The production app should replace that manual round trip with upload, job polling, and automatic download.

Useful quality controls:

```bash
.venv/bin/python generate.py CAPTURE.zip output/scene.ply \
  --voxel-size 0.02 --frame-stride 2 --pixel-stride 2 \
  --min-confidence 1 --max-depth 6
```

Smaller voxels and pixel strides produce more Gaussians and larger files. This output uses view-independent color (SH degree 0); it provides a proper splat-rendering test but will not match the photorealism of per-scene optimization.

## Cloud-shaped container

```bash
docker build -t splat-cloud-generator .
docker run --rm -v "$PWD/input:/input:ro" -v "$PWD/output:/output" \
  splat-cloud-generator /input/capture.zip /output/scene.ply
```

## Merge overlapping scans

Use two or more captures with at least one overlapping, geometrically distinctive area:

```bash
./merge.sh room-a.zip room-b.zip room-c.zip --output output/whole-floor.ply
```

The merger uses FPFH feature matching and RANSAC for coarse alignment, point-to-plane ICP for metric refinement, then voxel fusion. It greedily adds the best-overlapping scan, which supports overlap chains such as room A ↔ hallway B ↔ room C. It refuses weak matches instead of producing a plausible-looking but incorrect merge.

If every recording was made during the same uninterrupted ARKit session, preserve the app's shared world coordinates and skip global feature matching:

```bash
./merge.sh scan-1.zip scan-2.zip --shared-coordinates \
  --output output/merged.ply
```

Each run also writes `output/merged.registration.json` containing the estimated transform, overlap fitness, and ICP error for every input. Useful controls:

- `--voxel-size 0.04`: feature-registration resolution; increase for large/noisy scenes.
- `--fusion-voxel-size 0.025`: final Gaussian spacing.
- `--min-fitness 0.12`: minimum accepted overlap score; increase when correctness matters more than recovery.
- `--max-depth 6`: exclude unreliable distant depth.

Blank walls and repeated corridors are ambiguous. Include furniture, door frames, corners, or other distinctive geometry in the overlap, and aim for at least 20–30% overlap between neighboring scans.
