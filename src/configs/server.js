const servers = {
  local: {
    admin: '//server.closertb.site/client',
  },
  production: {
    admin: '//server.closertb.site/client',
  },
};

const getServers = () => servers[process.env.NODE_ENV];

export default getServers;
