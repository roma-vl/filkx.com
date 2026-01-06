# Nuxt 3 SSR + Studio Makefile

.PHONY: dev build install up down restart logs app-shell db-shell clean

# Local development (foreground)
dev:
	docker compose up -d

# Build images
build:
	docker compose build

# Install dependencies inside the container environment
# Using --rm to clean up the container after install
install:
	docker compose run --rm app-cli npm install

# Start in background
up:
	docker compose up -d

# Stop containers
down:
	docker compose down

# Full restart (down + up in background)
restart:
	docker compose down && docker compose up -d

# View logs for the app service
logs:
	docker compose logs -f app

# CLI access to app container
app-shell:
	docker compose run --rm app-cli sh

# CLI access to database
db-shell:
	docker compose exec db psql -U filkx -d filkx_db

# Clean up volumes and .nuxt folder
clean:
	docker compose down -v
	rm -rf .nuxt

# --- Production / Staging Commands ---

prod-build:
	docker compose -f docker-compose.prod.yml build

prod-up:
	docker compose -f docker-compose.prod.yml up -d

prod-down:
	docker compose -f docker-compose.prod.yml down

stage-build:
	docker compose -f docker-compose.stage.yml build

stage-up:
	docker compose -f docker-compose.stage.yml up -d

stage-down:
	docker compose -f docker-compose.stage.yml down
