FROM node:10.15.3

ADD . /app/

WORKDIR /app

RUN npm install --registry=http://npm.dev.56qq.com

EXPOSE 8091

CMD ["npm", "run", "client"]