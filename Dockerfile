FROM node:15-alpine

RUN mkdir -p /src
WORKDIR /src

COPY . .
RUN npm install

ENV PORT=3000

CMD ["npm", "run", "prod"]