FROM node:12

WORKDIR /usr/src/Pharmaceutical

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD [ "node", "src/index.js" ]