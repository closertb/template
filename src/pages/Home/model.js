import { getList } from './services';
import { PAGE_SIZE } from '../../configs/constants';

const initialSearch = {
  pn: 1,
  ps: PAGE_SIZE,
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
      const { datas, total } = yield call(getList, search);
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
