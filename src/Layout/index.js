import React, { PureComponent } from 'react';
import { Route, Switch, Link } from 'react-router-dom'; // HashRouter as Router,
import { Layout, Menu, Icon } from 'antd';
import HeaderMap from '../components/HeaderMap';
import menus from '../configs/menu';
import { SITE_NAME } from '../configs/constants';
import Pages from '../pages';
import styles from './index.less';

const { Sider, Content } = Layout;
export default class Layer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  }

  render() {
    const { collapsed } = this.state;
    const hashArr = window.location.hash.split('/');
    const selectedHash = hashArr.length > 1 ? hashArr[1] : 'home';
    return (
      <Layout className={styles.Layout}>
        <Sider
          className="layout-side"
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="logo">{SITE_NAME}</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[selectedHash]}>
            {Object.keys(menus).map(key => (
              <Menu.Item key={key}>
                <Link to={menus[key].path}>
                  <Icon type={menus[key].icon || 'user'} />
                  <span>{menus[key].name}</span>
                </Link>
              </Menu.Item>))
            }
          </Menu>
        </Sider>
        <Layout className="layout-content">
          <HeaderMap
            onToggle={this.toggle}
            collapsed={collapsed}
            onLogout={() => { console.log('logout'); }}
            username="denzel!"
          />
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <Switch>
              <Route exact path={menus.home.path} component={Pages.Home} />
              <Route exact path={menus.action.path} component={Pages.ActionTest} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
