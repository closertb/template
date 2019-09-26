export const Menu = [{
  name: 'home',
  path: '/home',
  component: 'Home'
}, {
  name: 'action',
  path: '/action',
  component: 'ActionTest'
}];


export const ValidRoute = Menu.map(({ path }) => path);
