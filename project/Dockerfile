FROM node:6.3.1

RUN mkdir -p /tiny

WORKDIR /tiny

ADD . /tiny

RUN cd /tiny && npm install

EXPOSE 3000

CMD ["node", "/tiny/server.js"]