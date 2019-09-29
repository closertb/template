// eslint-disable-next-line no-unused-vars
import color from 'cli-color';
import path from 'path';
// import webpack from 'webpack';
import Koa from 'koa';
import staticSource from 'koa-static';
import routers from './router';

// import config from '../webpack.config.babel';

const staticPath = '../dist';
const app = new Koa();

app.use(staticSource(path.join(__dirname, staticPath)));
app.use(routers.routes());
// if (process.env.NODE_ENV === 'production') {
//   // webpack compile
//   const compiler = webpack(config);
//   const options = {
//     publicPath: config.output.publicPath,
//     noInfo: true,
//     stats: { colors: true },
//   };
//   app.use(require('webpack-dev-middleware')(compiler, options));
//   app.use(require('webpack-hot-middleware')(compiler));
//   // mock
//   // console.log('mock middleware!', 'success');

//   // app.use(require('./mock_middleware'));
// }

// app.use(express.static(path.join(__dirname, '../public'), { maxAge: 86400000 * 30 }));


const server = app.listen(3200, () => {
  const { port } = server.address();
  console.log(`当前服务器已经启动,请访问, http://127.0.0.1:${port}`.green);
});
