import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { createHashHistory as createHistory } from 'history';
import Layout from './Layout';
import createApp from './model/createApp';
import './style/index.less';

const history = createHistory();
const app = createApp({ history });
app.start();

const App = () => (
  <Provider store={app._store}>
    <Router history={history}>
      <Layout path="/" />
    </Router>
  </Provider>
);

render(<App />, document.getElementById('app'));
