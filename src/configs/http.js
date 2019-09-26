import Http from '@doddle/http';
// import { Modal } from 'antd';
import cookie from 'js-cookie';
import getServer from './server';

let isModalShow = false;

function responseDataValidator(ctx, next) {
  const { _response = {} } = ctx;
  if (_response.status !== 'ok') {
    !isModalShow && console.error('操作提示', _response.message || '请刷新页面或退出重新登录');
    isModalShow = true;
    return true;
  }
  return next();
}

export default Http.create({
  servers: getServer(),
  contentKey: 'content',
  useMockProxyType: 2,
  authorityFailureCodes: ['120001', '120002'],
  query() {
    const token = cookie.get('token');
    return token ? { token: `token:${token}` } : {};
  },
  beforeResponse: [responseDataValidator]
});

export function createApi(api, post) {
  const handler = {
    get: (target, key) => {
      const service = target[key];
      if (!service) {
        return {};
      }
      return typeof service === 'string' ? param => post(service, param) :
        param => post(service.api, param, service.extend);
    }
  };
  return new Proxy(api, handler);
}
