# Nuxt 3 SSR + Docker + PostgreSQL

This project is a production-oriented Nuxt 3 SSR application template with Docker and PostgreSQL.

## Architecture Decisions

- **Nuxt 3 SSR**: Chosen for SEO and performance. The application is served by Nitro (Node.js engine), allowing for complex server-side logic and secure database connections.
- **Node.js 24.12**: Latest version used for better performance and modern JS features.
- **PostgreSQL**: Selected for its reliability, JSONB support, and robustness. It's the industry standard for production relational data.
- **Docker Multi-stage Build**: Minimizes the final image size by separating build dependencies from the production runtime.

## Scaling Potential

1. **Database**: Move to a managed service (RDS, Cloud SQL) or use a connection pooler like PgBouncer for high concurrency.
2. **Caching**: Integrate Redis for session storage and Nitro's route caching (`routeRules`).
3. **Stateless App**: The app is stateless, meaning it can be horizontally scaled using Kubernetes or Docker Swarm.
4. **Environment Separation**: Use different `.env` files for staging/production with CI/CD pipelines.

## Getting Started

1. Copy `.env.example` to `.env`.
2. Run `docker compose up --build`.
3. Visit `http://localhost:3000/health` (or your local domain `https://dev.filkx.com/`).
