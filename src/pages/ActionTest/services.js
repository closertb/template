import http from '../../configs/http';
import { APP_CLIENT_ID } from '../../configs/constants';

const { post } = http.create('admin');

export function login(param) {
  return post('/api/user/login', {
    ...param,
    appClientId: APP_CLIENT_ID,
  }, { ignoreQuery: true });
}

export function getList(param) {
  return post('/api/user/getList', param);
}
