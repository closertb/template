import React from 'react';
import { HashRouter, StaticRouter, Switch, NavLink, Route, Redirect } from 'react-router-dom';
// import { useDispatch } from 'redu';
import { SITE_NAME, SITE_ADDRESS } from '../configs/constants';
import menu from '../configs/menu';
import Pages from '../pages';
import styles from './index.less';

export default function Layout({ isServer, history }) {
  const { location: { pathname } } = history;
  const Router = isServer ? StaticRouter : HashRouter;
  return (
    <Router>
      <div className={styles.Layout}>
        {false &&
          <h4 className="user-info">
            <span className="info-label">欢迎你：</span>
            <span className="info-con">DenzelT !</span>
          </h4>}
        <h3 className="site">
          <div className="name">{SITE_NAME}</div>
          <div className="address">
            <a href={SITE_ADDRESS} target="_blank" rel="noopener noreferrer">{SITE_ADDRESS}</a>
          </div>
        </h3>
        <ul className="layout-menu">
          {menu.map(({ name, path }) => (
            <li key={path}>
              <NavLink activeClassName="selected" to={path}>{name}</NavLink>
              {/* <a onClick={toPath(path)} className={path === currentPath ? 'selected' : ''}>{name}</a> */}
            </li>
          ))}
        </ul>
        <div className="content">
          <Switch>
            {menu.map(({ path, component }) => (
              <Route exact key={path} path={path} component={Pages[component]} />
            ))}
            <Redirect from={pathname} push to="/home" />
          </Switch>
        </div>
        <footer className="foot">
          <div>Copyright © 2019-2050 doddle site | some icp</div>
        </footer>
      </div>
    </Router>
  );
}
