import Http from '@doddle/http';
import fetch from 'isomorphic-unfetch';
import cookie from 'js-cookie';
import getServer, { isInBrowser } from './server';

let isModalShow = false;

function responseDataValidator(ctx, next) {
  const { _response = {} } = ctx;
  const errorShow = isInBrowser ? window.alert : console.error;
  if (_response.status !== 'ok') {
    !isModalShow && errorShow(`操作提示, ${_response.message || '请刷新页面或退出重新登录'}`);
    isModalShow = true;
    return true;
  }
  return next();
}

export async function fetchRequest(ctx, next) {
  const { url, params } = ctx;
  try {
    ctx.response = await fetch(url, params);
    return next();
  } catch (error) {
    return Promise.reject(error);
  }
}

async function httpLog(ctx, next) {
  const start = Date.now();
  await next();
  const end = Date.now();
  console.log('the resquest time is:', `${end - start}ms`);
}

const http = Http.create({
  servers: getServer(),
  contentKey: 'content',
  useMockProxyType: 2,
  authorityFailureCodes: ['120001', '120002'],
  query() {
    const token = cookie.get('token');
    return token ? { token: `token:${token}` } : {};
  },
  beforeRequest: [httpLog],
  beforeResponse: [responseDataValidator]
});

// 替换原有的fetchRequest中间件, 位置原本为2，但增加了httpLog，所以就变成了3；
http.use(fetchRequest, 3, 1);

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

export default http;
