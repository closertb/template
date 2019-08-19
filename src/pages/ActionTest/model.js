export default ({
  namespace: 'index',
  state: {
    count: 0,
    loading: {
      list: true
    }
  },
  effects: {
    * add(_, { select, updateState }) {
      const { count } = yield select('index');
      yield updateState({ count: count + 1 });
    },
    * subtract(_, { select, updateState }) {
      const { count } = yield select('index');
      yield updateState({ count: count - 1 });
    }
  },
  subscriptions: {
    setup({ dispatch, listen }) {
      listen('pages/index', () => {
        dispatch({ type: 'add' });
      });
    }
  }
});
