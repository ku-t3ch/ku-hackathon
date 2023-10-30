FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
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

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

ARG GOOGLE_SERVICE_ACCOUNT_EMAIL
ARG GOOGLE_SHEET_ID
ARG GOOGLE_PRIV_KEY

ENV GOOGLE_SERVICE_ACCOUNT_EMAIL=sheet-aggregator@ku-hackathon-web-sheet-aggr.iam.gserviceaccount.com
ENV GOOGLE_SHEET_ID=1N_JmzCnMBUqSMu41uadhsLjXdv0UAXsO8TsjRR7-FGY
ENV GOOGLE_PRIV_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDM5fQp5bJzFuu/\nlCtf+MCBrBPaEdCz5MuUwOEKxAKlM+rdp4EpK+cxjZrJkUhdRqPXD4FfRfofnrBJ\n//Mblc9t1Ey82lQ8+sICrjmOh5ca7kRmQ7oyobQskozEqqYP6qAhsfhqfNFWGB6y\naAb9fCtgqyqQ0bJPRRb1qGw+9CveFmeDJYmzYzQmyZV9gN4sZxeLSppMtWtHNGln\nMgZ8Tm5iGq2M0GsvGVXOit3EhPHfihgekL3M12Qu4kXLnOQiKnIXTufLGmX7fCTW\nRkvyjMYSps8r9GvSU/fdjOJgXU44AV5U+f5+6u6r1I9b/UHjm7kGZLE3CBbcRlED\n1q46iG/nAgMBAAECggEAH4byfs/dGWBZfezqj6XS2SEFHPTIzCVUPds/xUxLq+fF\nJ73yXcdnl3RWcNVt8QxBgYHdQi+eQOdF8Nz1JzVx6VBVTmm5tHhRCeCM8qViVr56\nv9GEAO5orsMN7eTkEGblpMmhk6EJBNpJPuJK0Q4eDo3Hyui5KwFSexIjNbyUU2OQ\nhFHdw+N4iKl7sCgTsI6hXHXfDe+CP7RIIMoYLfZPYlddbi7g+7dCqAAp19rK14am\nlm04KcEEpH7V3XeSAo7mnwRqz84HzBA8hoRPl+zKDmbOC31B/MBOUi80XKz3PPEN\nFOJcdyn4FejCvvNYWEo+5//PmkuuD3iZiFqFb64q4QKBgQDznPi9sLE0S1xN7afs\n+YiQMG8HNgik+LU/Fs9ouGx/cKa34pn/kKykXduOA5JL0mh7sA2JZNZkkz7xf2BT\n0UvY9bW0NsWEO7rojVsKvwq1Cwohswpl26cMsrZr0MDMleCHh0N7ZSxcrqlvteGz\nel3IQ5rloAP5VwMEV0lgzMkfkwKBgQDXUQshxfBWrSv51jm4avdB63rqBIjSgyKp\nBHkillOHwT/5LgNDCSTw0wMkfoUczWxlxaUOQCrgZQTbJQDEDQNUB9R1YFFweJHM\nT2WQtN6Gikf54QR9VPRUaIoi/aeTwwWstscHrqbtyl+bVycMiq/LiaZdj58RJ0Ou\nIoxX1Qfa3QKBgBK4QTTyWuuVzuX+GSVQl3nc/usi788dfW/3pMB7S3sPgQAoXYUR\n7PJEdBaZl6hT5st6X8/q+76GwhN0okZOkvF9EBVlEBB1NougMRrGS2BWFNU6GNZy\n5odHRFVMmUQfUD2Z20mkIKCOm16GL23HPWWiLEjw3t1OHmE7A9x4YAwZAoGAJXJ8\n4yTPxeNcUJlHdKF120sfF3Auc55G+upCPxex81xSyf2Mp64BdLjeRQyUDgxUG+ch\n67aRPnGTRKHM3kv9FjI+ayOTRmJRyRzN5zrtsKyAFB9kbn/F9qAv1iITcQlsBTvM\npbNkaNrXgebIbc/4/wcznfYKjissBC8SBXyRXykCgYBt9Vr4SQoPlIuaFyJTl299\njvCsll/0XCw/ea8j/z8zvkPfswWxQd9SleKjqy2BpGvzlDDd2E0ffVxPK+KEG1/i\nhRubvItCqIfls2O19bM3Co/FWadfBFWitlDQetDOYGPeAbgNyx5Xr/jQPAE5gSf2\n9rqLG3E11nUxnAZbGNzXkg==\n-----END PRIVATE KEY-----\n"

RUN yarn build

# If using npm comment out above and use below instead
# RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]