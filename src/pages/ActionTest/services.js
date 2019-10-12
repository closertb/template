import http from '../../configs/http';

const { post } = http.create('admin');

export function login(param) {
  return post('/api/user/login', {
    ...param,
  }, { ignoreQuery: true });
}

export function getList(param) {
  return post('/api/user/getList', param);
}
