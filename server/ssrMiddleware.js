const { renderToString } = require('react-dom/server');
const stateServe = require('./stateMiddleaWare');
const CreateDom = require('../src/server').default;

function renderFullPage(html, stateKey) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width = device-width,initial-scale=1, maximum-scale=1, user-scalable=no">
      <meta name="format-detection" content="telephone=no">
      <meta name="format-detection" content="email=no">
      <title>doddle dva</title>
      <link href="/index.css" rel="stylesheet">
    </head>
    <body>
      <div id="app" class="home">${html}</div>
      <script type="text/javascript" src="/states/${stateKey}.js"></script>
      <script type="text/javascript" src="/index.js"></script>
    </body>
  </html>
  `;
}

module.exports = async (ctx, next) => {
  const { url } = ctx;
  // const reducersMap = new Map();
  const initialState = { index: { state: { timeStamp: Date.now() } } };
  // let currentNamespace;
  const context = {
    tag: 'ctx'
  };
  // 缓存states
  const stateKey = stateServe.set(JSON.stringify(initialState));
  const renderProps = { store: initialState, location: url, context };
  const html = renderToString(CreateDom(renderProps));
  ctx.body = renderFullPage(html, stateKey);
  await next();
};
