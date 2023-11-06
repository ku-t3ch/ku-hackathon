# Use a base image
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files and install dependencies
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG GOOGLE_SERVICE_ACCOUNT_EMAIL
ARG GOOGLE_SHEET_ISSUES
ARG GOOGLE_SHEET_DEV_FORM
ARG GOOGLE_SHEET_DESIGN_FORM
ARG GOOGLE_PRIV_KEY

# Set environment variables for secrets
ENV GOOGLE_SERVICE_ACCOUNT_EMAIL=$GOOGLE_SERVICE_ACCOUNT_EMAIL
ENV GOOGLE_SHEET_ISSUES=$GOOGLE_SHEET_ISSUES
ENV GOOGLE_SHEET_DEV_FORM=$GOOGLE_SHEET_DEV_FORM
ENV GOOGLE_SHEET_DESIGN_FORM=$GOOGLE_SHEET_DESIGN_FORM
ENV GOOGLE_PRIV_KEY=$GOOGLE_PRIV_KEY

RUN export NODE_OPTIONS=--openssl-legacy-provider
RUN yarn build

# Production image, copy files and configure runtime environment
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy public files
COPY --from=builder /app/public ./public

# Set permissions and copy build files
RUN mkdir .next
RUN chown nextjs:nodejs .next
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"
CMD ["node", "server.js"]
