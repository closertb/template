import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import Layout from './Layout';

export default function ({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </Router>
  );
}
