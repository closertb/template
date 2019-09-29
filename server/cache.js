const mcache = require('memory-cache');

const duration = 100;
const Cache = {
  get(key) {
    return mcache.get(key);
  },
  set(key, data) {
    mcache.put(key, data, duration * 1000);
  }
};

module.exports = Cache;
