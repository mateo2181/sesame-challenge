FROM node:20-alpine

WORKDIR /code

COPY package*.json ./
COPY . .

RUN npm install

CMD [ "npm", "run": "build:watch"]