import http, { createApi } from 'configs/http';

const { post } = http.create('mock');

export default createApi({
  getList: '/service/query',
  getDetail: '/service/detail',
  save: '/service/save',
  update: '/service/update'
}, post);
