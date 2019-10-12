const { renderToString } = require('react-dom/server');
const { matchPath } = require('react-router-dom');
const stateServe = require('./stateMiddleaWare');
const CreateDom = require('../src/server').default;
const routes = require('../src/Layout/routes').default;

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
  const context = {
    tag: 'ctx'
  };

  const renderProps = { location: url, context };

  const server = CreateDom(renderProps);
  const store = server.app._store;
  // console.log('app', store);
  // const initialState = { index: { state: { timeStamp: Date.now() } } };
  const dataRequirements = routes
    .filter(route => matchPath(url, route)) // filter matching paths
    .map(route => route.component) // map to components
    .filter(comp => comp.getInitialState) // check if components have data requirement
    .map(comp => store.dispatch(comp.getInitialState({ count: 5 }))); // dispatch data requirement
  // let currentNamespace;
  // console.log('com', dataRequirements);
  await Promise.all(dataRequirements);
  // 缓存states
  const initialState = store.getState();
  const stateKey = stateServe.set(JSON.stringify(initialState));
  const html = renderToString(server.render());
  ctx.body = renderFullPage(html, stateKey);
  await next();
};
