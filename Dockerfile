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
# Set host to 0.0.0.0 so it's accessible outside the container
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# Copy only the necessary build output
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package*.json ./

# Install production dependencies only
RUN npm install --omit=dev

EXPOSE 3000

# Start the application
CMD ["node", ".output/server/index.mjs"]
