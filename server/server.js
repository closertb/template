require('colors');
const path = require('path');
const Koa = require('koa');
const staticSource = require('koa-static');
const router = require('./router');

const staticPath = '../public';
const app = new Koa();

app.use(staticSource(path.join(__dirname, staticPath)));

app.use(router.routes())
  .use(router.allowedMethods());

const server = app.listen(3001, () => {
  const { port } = server.address();
  console.log(`当前服务器已经启动,请访问, http://127.0.0.1:${port}`.green);
});
