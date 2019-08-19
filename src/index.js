import React from 'react';
import dva from 'dva';
import hook from '@doddle/dva';
import './style/index.less';

// Initialize
const app = dva({
  onError(e) {
    console.log(e);
  }
});

hook({ app });

// 注册Model
function importAll(r) {
  r.keys().forEach(key => app.model(r(key).default));
}

importAll(require.context('./layouts', true, /model\.js$/));
importAll(require.context('./pages', true, /model\.js$/));
importAll(require.context('./models', true, /\.js$/));

// Router
app.router(require('./router').default);

// Start
app.start('#app');
