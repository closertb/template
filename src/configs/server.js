const servers = {
  local: {
    admin: '//server.closertb.site/client', // http://localhost:8080
  },
  production: {
    admin: '//server.closertb.site/client',
  },
};

const getServers = () => servers[process.env.NODE_ENV];

export default getServers;
