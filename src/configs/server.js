const servers = {
  local: {
    admin: 'http://localhost:8080',
  },
  production: {
    admin: '//scf.56qq.com',
  },
};

const getServers = () => servers[process.env.NODE_ENV];

export default getServers;
