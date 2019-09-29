import dva from 'dva';
import { RouterContext } from 'dva/router';
import hook from '@doddle/dva';
import router from './router';
import './style/index.less';

const pageModel = require.context('./pages', true, /model\.js$/);
const layoutModel = require.context('./Layout', true, /model\.js$/);

// 注册Model
function importAll(app, r) {
  r.keys().forEach(key => app.model(r(key).default));
}
/* // Initialize
const app = dva({
  onError(e) {
    console.log(e);
  }
});

hook({ app });

importAll(app, layoutModel);
importAll(app, pageModel);

// Router
app.router(router);
// Start
app.start('#app');
*/

export default function createApp(opts = {}, isServer) {
  const app = dva(opts);
  hook({ app });
  importAll(app, layoutModel);
  importAll(app, pageModel);
  if (isServer) {
    app.router(({ renderProps }) => (
      <RouterContext {...renderProps} />
    ));
  } else {
    app.router(router);
  }
  return app;
}
