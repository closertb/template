import { getList } from './services';

const initialSearch = {
  pn: 1,
  ps: 10
};

export default {
  namespace: 'home',

  state: {
    datas: [],
    total: 0,
    search: initialSearch,
    loading: { getList: false, infoInit: false },
  },

  effects: {
    * getList({ payload }, { call, update, select }) {
      const { search } = yield select('home');
      const { list: datas, total } = yield call(getList, search);
      yield update({ datas, total });
    },
  },

  reducers: {
    updateSearch(state, { payload }) {
      const { search } = state;
      return { ...state, search: { ...search, ...payload } };
    }
  }
};
