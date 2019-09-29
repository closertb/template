import Router from 'koa-router';
import stateMiddleaWare from './stateMiddleaWare';
import ssrMiddleware from './ssrMiddleware';

const router = new Router();
router.use('/state', stateMiddleaWare);
router.use('/action', ssrMiddleware);
router.use('/home', ssrMiddleware);
router.use('/', ssrMiddleware);

export default router;
