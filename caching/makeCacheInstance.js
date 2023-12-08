const nodeCache = require("node-cache");
const STD_TTL = 60 * 5;

const makeCacheInstance = (key, stdTTL = STD_TTL) => {
  const serverCache = new nodeCache({ stdTTL });
  serverCache.flushAll();

  const writeToCache = (key, data) => {
    return serverCache.set(key, data);
  };

  const cacheHasData = (key) => {
    return serverCache.has(key);
  };

  const readFromCache = (key) => {
    return serverCache.get(key);
  };

  return {
    write: (data) => writeToCache(key, data),
    read: () => readFromCache(key),
    hasData: () => cacheHasData(key),
  };
};

module.exports = makeCacheInstance;
