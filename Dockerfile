# ---- Build stage ----
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies based on package-lock.json or package.json
COPY package*.json ./
RUN npm install

# Copy project files and build
COPY . .
RUN npm run build

# ---- Production stage ----
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# Copy build output
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package*.json ./

# Copy Prisma files for migration
COPY --from=builder /app/prisma ./prisma

# Install production dependencies + prisma CLI
RUN npm install --omit=dev
RUN npm install prisma@^6.4.1 --save-prod

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]

