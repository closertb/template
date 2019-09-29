import React from 'react';
import { Router } from 'react-router';
import Layout from './Layout';

export default function ({ history = { location: { } } }) {
  return (
    <Router history={history}>
      <Layout history={history} />
    </Router>
  );
}
