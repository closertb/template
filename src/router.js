import { Router, Switch, Route } from 'dva/router';
import Layout from './Layout';

export default function ({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Layout} />
      </Switch>
    </Router>
  );
}
