# iPhone LiDAR capture and Gaussian splat viewer

The app records calibrated RGB, LiDAR depth, confidence, intrinsics, and ARKit poses. It also renders trained Gaussian splats natively with [MetalSplatter](https://github.com/scier/MetalSplatter).

## Capture

Run `iPhoneLIDAR.xcodeproj` on an ARKit-capable iPhone and tap the record button. On a LiDAR device the app records RGB, scene depth, and confidence. On other iPhones it records RGB plus the camera calibration, visual-inertial pose, and timestamp needed by the repository's Mac-only COLMAP reconstruction path. After recording, tap **Export Capture** to create a ZIP and open the native share sheet; select AirDrop to transfer it directly to the Mac. Raw captures are also stored under:

```text
Files → On My iPhone → iPhoneLIDAR → LiDARCaptures
```

`View 3D Capture` is an immediate LiDAR point-cloud preview when depth is available. RGB-only captures must be reconstructed on the Mac before they can be viewed in 3D. The preview is not a trained Gaussian splat.

## Render a Gaussian splat on iPhone

1. Produce a standard trained Gaussian `.ply`, `.spz`, or `.splat` file with a reconstruction pipeline.
2. Transfer it to the iPhone using AirDrop, iCloud Drive, or Files.
3. Tap **Open Gaussian Splat** in the app and select it.
4. Drag to orbit and pinch to zoom.

The importer copies selected models to the app's `Documents/GaussianSplats` folder, so they remain available to the app.

## Reconstruction boundary

MetalSplatter is the native renderer, not the reconstruction model. Turning the recorded frames into trained Gaussian parameters still requires either:

- the repository's Mac/CUDA per-scene training pipeline, or
- a separately hosted feed-forward model such as DepthSplat or DrivingForward.

The app intentionally does not relabel raw LiDAR points as a trained Gaussian scene. A production capture-to-view workflow should upload the capture, reconstruct it on a worker, and return an SPZ file to this viewer.
