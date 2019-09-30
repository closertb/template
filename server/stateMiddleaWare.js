const randomstring = require('randomstring');
const cache = require('./cache');

// const EXPIRE = 10;

module.exports = async (ctx, next) => {
  const { params: { key } } = ctx;
  let value;
  if (!key) {
    value = '';
  } else {
    value = cache.get(`state:${key}`);
  }
  ctx.response.set('Content-Type', 'text/javascript');
  if (value) {
    ctx.body = `window.states = ${JSON.stringify(value)};`;
  } else {
    ctx.body = 'window.states = "{}"; console.error(no state found)';
  }
  await next();
};

module.exports.set = (stateString) => {
  const key = randomstring.generate() + Date.now();
  cache.set(`state:${key}`, stateString);
  console.log('cache', key, stateString);
  return key;
};
