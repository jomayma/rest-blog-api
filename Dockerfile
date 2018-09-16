FROM node:9.4.0-alpine
COPY server.js .
COPY package.json .
COPY ./routes/ ./routes/
RUN npm install &&\
    apk update &&\
    apk upgrade
EXPOSE  3000
CMD node server.js
