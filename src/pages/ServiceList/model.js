import model from 'configs/model';
import { withLoading } from 'carno/utils';
import { Paths, PAGE_SIZE } from 'configs/constants';
import services from './services';

const initialSearch = {
  pageNum: 1,
  pageSize: PAGE_SIZE,
  status: undefined,
};

export default model.extend({
  namespace: 'home',

  state: {
    datas: [],
    total: 0,
    search: initialSearch,
    loading: { list: false, confirmLoading: false },
  },
  subscriptions: {
    setup({ listen, dispatch }) {
      listen(Paths.SERVICE_LIST, () => {
        dispatch({ type: 'getList' });
      }, false); // 将beforeEnterListener方法禁用
    },
  },
  effects: {
    * getList({ payload }, { call, update, select }) {
      const { search } = yield select('home');
      const { datas, total } = yield call(withLoading(services.getList, 'list'), search);
      yield update({ datas, total });
    },
    * save({ payload }, { call, put }) {
      yield call(withLoading(services.save, 'confirmLoading', '添加成功'), payload);
      yield put({ type: 'getList' });
    },
    * update({ payload }, { call, put }) {
      yield call(withLoading(services.update, 'confirmLoading', '修改成功'), payload);
      yield put({ type: 'getList' });
    },
    * getDetail({ payload }, { call }) {
      yield call(withLoading(services.getDetail, 'list'), payload);
    }
  },

  reducers: {
    updateSearch(state, { payload }) {
      const { search } = state;
      return { ...state, search: { ...search, ...payload } };
    }
  }
});
