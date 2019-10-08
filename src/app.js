import dva from 'dva';
import React from 'react';
import hook from '@doddle/dva';
import router from './router';
import SsrRouter from './router-ssr';
import * as models from './model';
import './style/index.less';

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

export default function createApp(opts = {}, isServer, isSimple) {
  if (isSimple) {
    return <SsrRouter {...opts} />;
  }
  const app = dva(opts);
  hook({ app });
  Object.keys(models).forEach(key => app.model(models[key]));
  if (isServer) {
    app.router(({ renderProps }) => (
      <SsrRouter {...renderProps} />
    ));
  } else {
    app.router(router);
  }
  return app;
}
