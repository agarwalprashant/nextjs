FROM node:10-alpine

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /webplayer/nextjs

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Building app
RUN npm run build

# Running the app
CMD [ "npm", "start" ]