import { createMemoryHistory } from 'dva/router';
import { renderToString } from 'react-dom/server';
import stateServe from './stateMiddleaWare';
import createApp from '../common/create_app';

function renderFullPage(html, stateKey) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="/index.css" />
</head>
<body>
  <div id="root">
    <div>
      ${html}
    </div>
  </div>
  <script type="text/javascript" src="/states/${stateKey}.js"></script>
  <script src="/index.js"></script>
</body>
</html>
  `;
}

export default async (ctx, next) => {
  // const { url, method } = ctx;
  // const reducersMap = new Map();
  const initialState = { timeStamp: Date.now() };
  const renderProps = {};
  // let currentNamespace;

  // 缓存states
  const stateKey = stateServe.set(JSON.stringify(initialState));

  const app = createApp({
    history: createMemoryHistory(),
    initialState,
  }, true);
  const html = renderToString(app.start()({ renderProps }));

  ctx.body = renderFullPage(html, stateKey);

  await next();
};
