# ---- Build stage ----
FROM node:22-slim AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ---- Production stage ----
FROM node:22-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.js ./

RUN npm install --omit=dev
RUN npx prisma generate --schema=./prisma/schema.prisma

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
