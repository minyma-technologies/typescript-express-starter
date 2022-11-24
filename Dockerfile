# Adapted from https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# clean install only runtime dependencies
RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "npm", "run", "start:prod" ]