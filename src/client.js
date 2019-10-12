import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory as createHistory } from 'history';
import Layout from './Layout';
import createApp from './model/createApp';
import './style/index.less';

// ssr渲染，浏览器端渲染入口
const history = createHistory();
const app = createApp({ history });
app.start();

const App = () => (
  <Provider store={app._store}>
    <Router history={history}>
      <Layout isServer isWindow />
    </Router>
  </Provider>
);

ReactDOM.hydrate(<App />, document.getElementById('app'));
