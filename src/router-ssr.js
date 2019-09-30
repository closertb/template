import React from 'react';
import { Route, StaticRouter as Router } from 'dva/router';
import Layout from './Layout';

export default function ({ history, location }) {
  return (
    <Router>
      <Route path="/">
        <Layout history={history} location={location} isServer />
      </Route>
      {/* <Layout history={history} location={location} isServer /> */}
    </Router>
  );
}
