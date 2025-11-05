# ---------- deps: install all deps (incl. dev) once for caching ----------
FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm npm ci

# ---------- lint: lint TS code ----------
FROM deps AS lint
WORKDIR /app
COPY eslint.config.mjs ./
COPY __tests__ ./__tests__
COPY src ./src
RUN npm run lint && echo "ok" > /lint_passed

# ---------- test-eslint: run ESLint's rules tests before producing a runtime image ----------
FROM deps AS test-eslint
WORKDIR /app
COPY tsconfig.json ./
COPY jest.config.js ./
COPY jest.config.eslint.js ./
COPY eslint.config.mjs ./
COPY __tests__/esLint ./__tests__/esLint
RUN npm run test:eslint && echo "ok" > /test_eslint_passed

# ---------- test-learning: run learning tests before producing a runtime image ----------
FROM deps AS test-learning
WORKDIR /app
COPY tsconfig.json ./
COPY jest.config.js ./
COPY jest.config.learning.js ./
COPY __tests__/learning ./__tests__/learning
RUN npm run test:learning && echo "ok" > /test_learning_passed

# ---------- test-unit: run unit tests before producing a runtime image ----------
FROM deps AS test-unit
WORKDIR /app
COPY tsconfig.json ./
COPY jest.config.js ./
COPY jest.config.unit.js ./
COPY src ./src
COPY __tests__/unit ./__tests__/unit
RUN npm run test:unit && echo "ok" > /test_unit_passed

# ---------- builder: compile TypeScript ----------
FROM deps AS builder
WORKDIR /app
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# ---------- runner: production image (clean install, no dev deps) ----------
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm npm ci --omit=dev
COPY --from=lint /lint_passed /
COPY --from=test-eslint /test_eslint_passed /
COPY --from=test-learning /test_learning_passed /
COPY --from=test-unit /test_unit_passed /
COPY --from=builder /app/dist ./dist
USER node
CMD ["node", "dist/main.js"]
