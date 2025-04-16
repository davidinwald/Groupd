FROM node:18-alpine as builder

WORKDIR /app

# Add build-time arguments
ARG VITE_API_URL

# Copy package files
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build with environment variable
ENV VITE_API_URL=${VITE_API_URL}
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Add nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port that DO expects
EXPOSE 5173

# Start nginx on the correct port
CMD ["nginx", "-g", "daemon off;"] 