#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${ROOT}"

docker compose up --build -d v2x-viewer
echo "Viewer is running at http://localhost:${V2X_VIEWER_PORT:-8080}"
echo "Stop it later with: docker compose down"
