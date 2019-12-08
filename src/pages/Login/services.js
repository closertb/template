import http from '../../configs/http';

const { post } = http.create('admin');

export function login(param) {
  return post('/user/login', {
    ...param,
  }, { ignoreQuery: true });
}

export function signUp(param) {
  return post('/web/customer/register', param, { ignoreQuery: true });
}
