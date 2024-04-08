# Use an official Node runtime as a parent image
FROM node:20.12.1
# Set the working directory in the container
WORKDIR /usr/src/app
# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./
# Install dependencies
RUN npm install --force
# Bundle app source inside the Docker image
COPY . .
# Make port 8001 available to the world outside this container
EXPOSE 8001
# Define environment variable
ENV NODE_ENV=development
ENV CHOKIDAR_USEPOLLING=1
ENV GATSBY_WEBPACK_PUBLICPATH=/

# Run gatsby develop on container start
CMD ["npm", "run", "develop"]