import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import './style/index.less';

ReactDOM.hydrate(
  <BrowserRouter>
    <Layout isServer isWindow />
  </BrowserRouter>,
  document.getElementById('app')
);
