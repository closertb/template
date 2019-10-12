import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter as Router } from 'react-router-dom';
import createHistory from 'history/createMemoryHistory';

import createApp from './model/createApp';
import Layout from './Layout';

export default function CreateDom({ initialState, location, context }) {
  const history = createHistory(location);
  const app = createApp({ history, initialState });
  app.start();
  // console.log('local render');
  return (
    <Provider store={app._store}>
      <Router location={location} context={context} history={history}>
        <Layout location={location} context={context} history={history} isServer />
      </Router>
    </Provider>
  );
}
