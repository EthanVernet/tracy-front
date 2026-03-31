# Build & Deploy
docker compose -f docker-compose.dev.yaml down
docker compose -f docker-compose.dev.yaml build --no-cache tracy-next
docker compose -f docker-compose.dev.yaml up -d
docker logs tracy_next --follow