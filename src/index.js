import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import Layout from './Layout';
import createApp from './model/createApp';
import './style/index.less';

const history = createHistory();
const app = createApp({ history });
app.start();

const App = () => (
  <Provider store={app._store}>
    <Router history={history}>
      <Route path="/" component={Layout} />
    </Router>
  </Provider>
);

render(<App />, document.getElementById('app'));
