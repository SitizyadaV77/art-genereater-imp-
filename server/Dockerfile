# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 3000 for the API server
EXPOSE 5000

# Start the API server
CMD [ "npm", "start" ]

# Set environment variables
ENV OPENAI_API_KEY="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"
ENV MIDJOURNEY_API_KEY="49f03540-fde6-4b1b-a9bf-86d67892751b"