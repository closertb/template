import cookie from 'js-cookie';
import router from 'dva/router';
import { login } from './services';

export default ({
  namespace: 'index',
  state: {
    count: 0,
    loading: {
      list: true
    }
  },
  effects: {
    * add(_, { select, update }) {
      const { count } = yield select('index');
      yield update({ count: count + 1 });
    },
    * subtract(_, { select, update }) {
      const { count } = yield select('index');
      yield update({ count: count - 1 });
    },
    * login({ payload }, { call }) {
      const { id, token, name } = yield call(login, payload);

      const expires = { expires: 1 };
      cookie.set('uid', id, expires);
      cookie.set('username', name, expires);
      cookie.set('token', token, expires);
      cookie.remove('lastPath');
      router.push('/home');
    }
  },
  subscriptions: {
    setup({ dispatch, listen }) {
      listen('/action', () => {
        dispatch({ type: 'add' });
      });
    }
  },
  reducers: {
    updateCount(state, { payload }) {
      return {
        ...state,
        count: payload.count
      };
    }
  }
});
