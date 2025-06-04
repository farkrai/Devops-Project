# Use official Node.js LTS slim image for smaller size and security
FROM node:18-slim

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package files and install dependencies first (leverages Docker cache)
COPY package*.json ./
RUN npm install --production --ignore-scripts

# Copy only necessary files to the working directory
COPY . .

# Change to a non-root user provided by the Node.js image
USER node

# Expose port 3000 to the outside
EXPOSE 3000

# Command to start your app
CMD ["node", "app.js"]
