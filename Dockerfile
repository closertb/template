FROM keymetrics/pm2:latest-alpine

ADD . /app/

WORKDIR /app

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --registry=https://registry.npmjs.org/

EXPOSE 8091

CMD [ "npm", "run", "client" ]