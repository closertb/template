import React from 'react';
import { StaticRouter as Router } from 'react-router-dom';
import Layout from './Layout';

export default function ({ location, context }) {
  return (
    <Router location={location} context={context}>
      <Layout location={location} context={context} isServer />
    </Router>
  );
}
