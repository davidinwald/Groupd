FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy application code
COPY . .

# Expose the port the app runs on
EXPOSE 5173

# Start the application with host flag
CMD ["npm", "run", "dev", "--", "--host"] 