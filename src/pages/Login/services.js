import http from '../../configs/http';
import { APP_CLIENT_ID } from '../../configs/constants';
import bind from 'antd-doddle/node_modules/bind-decorator';

const { post } = http.create('admin');

export function login(param) {
  return post('/api/user/login', {
    ...param,
    appClientId: APP_CLIENT_ID,
  }, { ignoreQuery: true });
}

export function signUp(param) {
  return post('/web/customer/register', param, { ignoreQuery: true });
}