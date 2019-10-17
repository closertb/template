const Router = require('koa-router');
const stateMiddleaWare = require('./stateMiddleaWare');
const ssrMiddleware = require('./ssrMiddleware');

const router = new Router();
router.get('/states/:key.js', stateMiddleaWare);
router.get('/:url', ssrMiddleware);

module.exports = router;
