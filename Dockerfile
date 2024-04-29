FROM node:18-alpine

WORKDIR /myapp

COPY package.json .

RUN npm install

EXPOSE 8008

COPY . .

CMD [ "node", "app.js" ]
