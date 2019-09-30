const randomstring = require('randomstring');
const cache = require('./cache');

// const EXPIRE = 10;

module.exports = async (ctx, next) => {
  const { params: { key } } = ctx;
  console.log('key', key);
  let value;
  if (!key) {
    value = '';
  } else {
    value = cache.get(`${cache.prefix}:state:${key}`);
  }
  ctx.body = value || '';
  ctx.res.type = 'text/javascript';

  if (value) {
    ctx.body = `window.states = ${JSON.stringify(value)};`;
  } else {
    ctx.body = 'window.states = "{}"; console.error(no state found)';
  }
  await next();
};

module.exports.set = (stateString) => {
  const key = randomstring.generate() + Date.now();
  cache.set(`${cache.prefix}:state:${key}`, stateString);
  return key;
};
