import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import Layout from './Layout';
import createApp from './model/createApp';
import './style/index.less';

// ssr渲染，浏览器端渲染入口
const history = createHistory();

const app = createApp({
  history,
  initialState: window.states && JSON.parse(window.states),
});
app.start();
delete window.states;
const App = () => (
  <Provider store={app._store}>
    <Router history={history}>
      <Layout isServer isWindow />
    </Router>
  </Provider>
);

ReactDOM.hydrate(<App />, document.getElementById('app'));
