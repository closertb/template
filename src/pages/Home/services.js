import http from '../../configs/http';

const { post } = http.create('admin');

export function getList(param) {
  return post('/rule/query', param);
}
