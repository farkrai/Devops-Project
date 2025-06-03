# Use official Node.js LTS image as base
FROM node:18

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package files and install dependencies first (leverages Docker cache)
COPY package*.json ./

RUN npm install

# Copy all project files to the working directory
COPY . .

# Expose port 3000 to the outside
EXPOSE 3000

# Command to start your app
CMD ["node", "app.js"]
