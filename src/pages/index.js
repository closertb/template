import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home';


export default class Root extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}
