FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy and install dependencies separately for cache efficiency
COPY package*.json ./
RUN npm ci

# Copy rest of the code
COPY . .

# Build
RUN npm run build

# Start app
CMD ["node", "dist/main.js"]
