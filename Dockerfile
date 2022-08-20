# Base image 
FROM node:18

# Create dictory
WORKDIR /usr/src/app

COPY package*.json .

# Install dependencies
RUN npm install

# Bundle app
COPY . .

# Create a "dist" folder with the produccion build
RUN npm run build 

# start server 
CMD ["node", "dist/main.js"]