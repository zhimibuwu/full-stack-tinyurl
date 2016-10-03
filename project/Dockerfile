FROM node:6.3.1

RUN mkdir -p /project

WORKDIR /project

ADD . /project

RUN cd /project && npm install

EXPOSE 3000

CMD [“node”, “/app/server.js”]