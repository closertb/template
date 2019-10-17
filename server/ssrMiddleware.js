const { renderToString } = require('react-dom/server');
const { matchPath } = require('react-router-dom');
const stateServe = require('./stateMiddleaWare');
const CreateDom = require('../src/server').default;
const routes = require('../src/Layout/routes').default;

// 事先计算出有效的URL
const validRoutes = routes.map(({ path }) => path);
const routesTitle = routes.reduce((pre, { path, name }) => {
  pre[path] = name;
  return pre;
}, {});

function renderFullPage(html, stateKey, title = 'doddle') {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width = device-width,initial-scale=1, maximum-scale=1, user-scalable=no">
      <meta name="format-detection" content="telephone=no">
      <meta name="format-detection" content="email=no">
      <title>${title}</title>
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
  const renderProps = { location: url };

  // redirect to home when route is not a validRoutes
  if (url === '/' || !validRoutes.includes(url)) {
    ctx.redirect('/home');
    return;
  }
  const title = routesTitle[url];

  const server = CreateDom(renderProps);
  const store = server.app._store;
  const dataRequirements = routes
    .filter(route => matchPath(url, route)) // filter matching paths
    .map(route => route.component) // map to components
    .filter(comp => comp.getInitialState) // check if components have data requirement
    .map(comp => store.dispatch(comp.getInitialState({ count: 5, name: 'dom', pwd: '123456' })));
  // get initialState
  await Promise.all(dataRequirements);

  // cache states to genrate dynamic js
  const initialState = store.getState();
  const stateKey = stateServe.set(JSON.stringify(initialState));

  // generate html source
  const html = renderToString(server.render());
  ctx.body = renderFullPage(html, stateKey, title);
  await next();
};
