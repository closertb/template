export const Menu = [{
  name: '首页',
  path: '/blog',
  component: 'Blog',
  children: [{
    path: '/blog/:id',
    component: 'BlogDetail',
  }]
}, {
  name: '专项',
  path: '/project',
  component: 'NavCenter'
}];

export const Routes = Menu.reduce((pre, { children = [], ...others }) => pre.concat(others).concat(children), []);

export const NavMenu = [{
  name: '数字华容道',
  path: '/Klotski',
}, {
  name: '可视化演示',
  path: '/chart',
}];
