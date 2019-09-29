import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
// import { withClientState } from 'apollo-link-state';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { resolvers, typeDefs, defaults } from './client/index';
import LayoutRouter from './router';
import './style/index.less';

// Initialize
const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  clientState: { resolvers, defaults, cache, typeDefs },
  cache, // 本地数据存储
  link: new HttpLink({
    uri: 'https://api.github.com/graphql',
    batchInterval: 10,
    opts: {
      credentials: 'cross-origin',
    },
  })
});

function App(props) {
  console.log('his', props);
  return (
    <ApolloProvider client={client}>
      <LayoutRouter />
    </ApolloProvider>
  );
}

render((
  <App />
), document.getElementById('app'));
