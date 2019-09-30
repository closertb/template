const { createMemoryHistory } = require('history');
const { renderToString } = require('react-dom/server');
const stateServe = require('./stateMiddleaWare');
const createApp = require('../src/app').default;

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
      <div id="app" class="home">
        ${html}
      </div>
      <script type="text/javascript" src="/states/${stateKey}.js"></script>
      <script type="text/javascript" src="/index.js"></script>
    </body>
  </html>
  `;
}

module.exports = async (ctx, next) => {
  // const { url, method } = ctx;
  // const reducersMap = new Map();
  const initialState = { index: { state: { timeStamp: Date.now() } } };
  // let currentNamespace;

  // 缓存states
  const stateKey = stateServe.set(JSON.stringify(initialState));
  const history = createMemoryHistory();
  const app = createApp({
    history,
    initialState,
  }, true);
  const renderProps = { history };
  const html = renderToString(app.start()({ renderProps }));

  ctx.body = renderFullPage(html, stateKey);
  console.log('start render');
  await next();
};
