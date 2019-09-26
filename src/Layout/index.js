import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import { Menu, ValidRoute } from '../configs/menu';
import Pages from '../pages';
import styles from './index.less';

export default function Layout(props) {
  const { history: { location: { pathname } } } = props;
  return (
    <div className={styles.Layout}>
      <h4 className="user-info">
        <span className="info-label">欢迎你：</span>
        <span className="info-con">DenzelT !</span>
      </h4>
      <ul className="layout-menu">
        {Menu.map(({ name, path }) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          <li key={path}>
            <NavLink to={path} activeStyle={{ color: 'yellow' }}>{name}</NavLink>
          </li>
        // eslint-disable-next-line function-paren-newline
        )}
      </ul>
      <div style={{ height: '100%', paddingTop: 57, boxSizing: 'border-box' }}>
        {Menu.map(({ path, component }) => (
          <Route exact key={path} path={path} component={Pages[component]} />
        ))}
        {!ValidRoute.includes(pathname) && <Redirect from={pathname} to="/home" />}
      </div>
    </div>
  );
}
