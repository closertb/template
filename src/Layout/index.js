import React from 'react';
import { HashRouter, StaticRouter, Switch, NavLink, Route, Redirect } from 'react-router-dom';
import { SITE_NAME, SITE_ADDRESS } from '../configs/constants';
import menu from '../configs/menu';
import Pages from '../pages';
import styles from './index.less';

const { Home, ActionTest } = Pages;
export default function Layout({ isServer, location = {} }) {
  const { pathname } = location;
  const Router = isServer ? StaticRouter : HashRouter;

  const rProps = isServer ? { location } : {};
  console.log('loca', location);
  return (
    <Router {...rProps}>
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
          {isServer ?
            <>
              <Route path="/home" component={Home} />
              <Route path="/" component={ActionTest} />
            </> :
            <Switch>
              {menu.map(({ path, component }) => (
                <Route exact key={path} path={path} component={Pages[component]} />
              ))}
              <Redirect from={pathname} push to="/home" />
            </Switch>}
        </div>
        <footer className="foot">
          <div>before:{pathname}-after:{location.pathname}</div>
          <div>Copyright © 2019-2050 doddle site | some icp</div>
        </footer>
      </div>
    </Router>
  );
}
