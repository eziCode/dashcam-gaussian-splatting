FROM node:22-bookworm-slim AS web-build

WORKDIR /build
COPY splat-web-viewer/package.json splat-web-viewer/package-lock.json ./
RUN npm ci
COPY splat-web-viewer/ ./
ENV VITE_GUIDED_MODE=1 \
    VITE_SCENE_URL=/runtime/model.ply \
    VITE_TIMELINE_URL=/runtime/timeline.json \
    VITE_GEO_CONTEXT_URL=
RUN npm run build

FROM python:3.12-slim-bookworm

RUN apt-get update \
    && apt-get install -y --no-install-recommends nginx \
    && rm -rf /var/lib/apt/lists/*
RUN pip install --no-cache-dir numpy==2.4.2 pillow==12.1.1 plyfile==1.1.3 pyyaml==6.0.3
WORKDIR /app
COPY --from=web-build /build/dist /app/site
COPY vggt-transformer-pipeline/scripts/export_camera_path.py /app/scripts/export_camera_path.py
COPY vggt-transformer-pipeline/scripts/export_v2x_boxes.py /app/scripts/export_v2x_boxes.py
COPY docker/viewer/entrypoint.sh /app/entrypoint.sh
COPY docker/viewer/nginx.conf /etc/nginx/nginx.conf
RUN chmod +x /app/entrypoint.sh

EXPOSE 8080
ENTRYPOINT ["/app/entrypoint.sh"]
