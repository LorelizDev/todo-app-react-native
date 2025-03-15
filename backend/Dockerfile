FROM node:18-alpine

WORKDIR /usr/src/app

COPY backend/package*.json ./
RUN npm install

COPY backend/ .

RUN npm run build
COPY backend/dist /usr/src/app/dist

EXPOSE 3000

CMD ["npm", "start"]
