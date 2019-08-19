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
