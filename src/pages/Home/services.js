import http from '../../configs/http';

const { post } = http.create('admin');

export function getList(param) {
  return post('/api/user/getList', param);
}
