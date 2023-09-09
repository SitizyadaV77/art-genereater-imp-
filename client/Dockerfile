FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the production version of the application
RUN npm run build

# Serve the production version of the application with a static server
RUN npm install -g serve
CMD serve -s build

# Expose port 3000 so that it can be accessed from the host
EXPOSE 3000

# Set environment variables
ENV REACT_APP_API_URL=https://nftserver-s4tcdk7akq-el.a.run.app/
