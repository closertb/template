import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import Layout from './Layout';
import createApp from './model/createApp';
import './style/index.less';

// ssr渲染，浏览器端渲染入口
const history = createHistory();
const app = createApp({ history });
app.start();

const App = () => (
  <Provider store={app._store}>
    <BrowserRouter>
      <Layout isServer isWindow />
    </BrowserRouter>
  </Provider>
);

ReactDOM.hydrate(<App />, document.getElementById('app'));
