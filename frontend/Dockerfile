FROM node:18-alpine

WORKDIR /usr/src/app

COPY frontend/package*.json ./
RUN npm install

COPY frontend/ .

EXPOSE 8081

CMD ["npx", "expo", "start", "--web"]
