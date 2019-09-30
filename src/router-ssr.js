import React from 'react';
import { StaticRouter as Router } from 'dva/router';
import Layout from './Layout';

export default function ({ history }) {
  return (
    <Router history={history}>
      <Layout history={history} isServer />
    </Router>
  );
}
