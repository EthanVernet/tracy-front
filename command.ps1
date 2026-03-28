# Build & Deploy
docker compose down
docker compose build --no-cache tracy-next
docker compose up -d
docker logs tracy_next --follow