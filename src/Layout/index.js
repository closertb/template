import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import { SITE_NAME, SITE_ADDRESS } from '../configs/constants';
import { Menu, ValidRoute } from '../configs/menu';
import Pages from '../pages';
import styles from './index.less';

export default function Layout(props) {
  const { history: { location: { pathname } } } = props;
  return (
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
        {Menu.map(({ name, path }) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          <li key={path}>
            <NavLink to={path} activeClassName="selected">{name}</NavLink>
          </li>
        // eslint-disable-next-line function-paren-newline
        )}
      </ul>
      <div className="content">
        {Menu.map(({ path, component }) => (
          <Route exact key={path} path={path} component={Pages[component]} />
        ))}
        {!ValidRoute.includes(pathname) && <Redirect from={pathname} to="/home" />}
      </div>
      <footer className="foot">
        <div>Copyright © 2019-2050 doddle site | some icp</div>
      </footer>
    </div>
  );
}
