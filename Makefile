# Nuxt 3 SSR + Studio Makefile

.PHONY: dev build install up down restart logs app-shell db-shell clean

# Local development (foreground)
dev:
	docker compose up

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

# Open a shell in the app-cli container
app-shell:
	docker compose run --rm app-cli sh

# Open a shell in the database container
db-shell:
	docker compose exec db psql -U filkx -d filkx_db

# Clean up volumes and .nuxt folder
clean:
	docker compose down -v
	rm -rf .nuxt
