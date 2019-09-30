const Router = require('koa-router');
const stateMiddleaWare = require('./stateMiddleaWare');
const ssrMiddleware = require('./ssrMiddleware');

const router = new Router();
router.get('/state/:key', stateMiddleaWare);
router.get('/', ssrMiddleware);
router.get('/home', ssrMiddleware);
router.get('/action', ssrMiddleware);

module.exports = router;
