FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN adduser -s /bin/sh -h /app -D app

RUN chown -R app /usr/src/app

USER app

ENTRYPOINT [ "npm", "start" ]
