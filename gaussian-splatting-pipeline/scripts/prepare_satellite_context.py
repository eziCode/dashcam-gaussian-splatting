#!/usr/bin/env python3
"""Download and calibrate a replaceable satellite context plane for a scene."""
from __future__ import annotations
import argparse, json, math, shutil, urllib.parse, urllib.request
from pathlib import Path
from immersive_viewer import load_camera_path_with_transform

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("dataset", type=Path, help="COLMAP dataset used by the reconstruction")
parser.add_argument("output", type=Path, help="New context directory")
parser.add_argument("--latitude", type=float, required=True)
parser.add_argument("--longitude", type=float, required=True)
parser.add_argument("--radius-meters", type=float, default=120.0)
parser.add_argument("--pixels", type=int, default=2048)
parser.add_argument("--heading-degrees", type=float, default=0.0, help="Clockwise rotation aligning scene east/north to the image")
parser.add_argument("--ground-z", type=float, default=0.12, help="Viewer-space ground height after scene rotation")
parser.add_argument("--local-image", type=Path, help="Use a licensed orthophoto instead of USGS NAIP")
parser.add_argument("--attribution", default="USGS The National Map / USDA NAIP")
parser.add_argument("--replace", action="store_true", help="Replace imagery/configuration in an existing context directory")
args = parser.parse_args()
if args.output.exists() and not args.replace: raise ValueError(f"output already exists: {args.output} (pass --replace to update it)")
if args.radius_meters <= 0 or not 256 <= args.pixels <= 4096: raise ValueError("invalid radius or pixel size")
args.output.mkdir(parents=True, exist_ok=True)
image_path = args.output / "satellite.jpg"

if args.local_image:
    shutil.copy2(args.local_image, image_path)
else:
    # EPSG:3857 Web Mercator. The USGS export endpoint returns a north-up,
    # georeferenced NAIP/orthophoto crop without requiring a commercial token.
    radius_earth = 6378137.0
    x = radius_earth * math.radians(args.longitude)
    latitude = max(-85.05112878, min(85.05112878, args.latitude))
    y = radius_earth * math.log(math.tan(math.pi / 4 + math.radians(latitude) / 2))
    query = urllib.parse.urlencode({
        "bbox": f"{x-args.radius_meters},{y-args.radius_meters},{x+args.radius_meters},{y+args.radius_meters}",
        "bboxSR": 3857, "imageSR": 3857, "size": f"{args.pixels},{args.pixels}",
        "format": "jpg", "f": "image",
    })
    url = "https://imagery.nationalmap.gov/arcgis/rest/services/USGSNAIPImagery/ImageServer/exportImage?" + query
    request = urllib.request.Request(url, headers={"User-Agent": "dashcam-gaussian-splatting/1.0"})
    with urllib.request.urlopen(request, timeout=120) as response, image_path.open("wb") as output:
        shutil.copyfileobj(response, output)

_, _, _, _, _, normalization_scale = load_camera_path_with_transform(args.dataset)
payload = {
    "format": "geo-context-v1",
    "image": "/runtime/satellite.jpg",
    "latitude": args.latitude, "longitude": args.longitude,
    "radiusMeters": args.radius_meters,
    "metersPerSceneUnit": 1.0 / abs(normalization_scale),
    "sizeSceneUnits": 2.0 * args.radius_meters * abs(normalization_scale),
    "center": [0.0, 0.0, args.ground_z],
    "headingDegrees": args.heading_degrees,
    "attribution": args.attribution,
    "classification": "Contextual background; not contemporaneous accident evidence",
}
(args.output / "geo-context.json").write_text(json.dumps(payload, indent=2) + "\n")
print(json.dumps(payload, indent=2))
