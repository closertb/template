import React from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import menu from '../configs/menu';
import Pages from '../pages';
import './index.less';

export default function Layout() {
  return (
    <div className="Layout">
      <h4 className="user-info">
        <span className="info-label">欢迎你：</span>
        <span className="info-con">DenzelT !</span>
      </h4>
      <ul className="layout-menu">
        {menu.map(({ name, path }) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          <li key={path}>
            <NavLink to={path} activeStyle={{ color: 'yellow' }}>{name}</NavLink>
          </li>
        // eslint-disable-next-line function-paren-newline
        )}
      </ul>
      <div style={{ height: '100%', paddingTop: 57, boxSizing: 'border-box' }}>
        <Switch>
          <Route exact path="/home" component={Pages.Home} />
          <Route exact path="/product" component={Pages.ProductCart} />
          {/* 其他 */}
          <Redirect to="/home" />
        </Switch>
      </div>
    </div>
  );
}
