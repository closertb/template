const servers = {
  local: {
    admin: 'http://server.closertb.site/client', // http://localhost:8080
  },
  production: {
    admin: 'http://server.closertb.site/client',
  },
};

const getServers = () => servers[process.env.NODE_ENV];

// 判断当前是否在浏览器环境
export const isInBrowser = typeof window !== 'undefined';

export default getServers;
