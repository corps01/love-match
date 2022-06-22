FROM node:14

WORKDIR /app/nestjs

COPY package*.json ./

COPY ./dist/apps/backend/ ./

EXPOSE 3333

RUN yarn install --production

CMD node main.js

