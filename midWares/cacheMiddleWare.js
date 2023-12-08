const { readFromCache, cacheHasData } = require("../caching/index");

const cachingMiddleWare2 = (req, res, next) => {
  try {
    if (cacheHasData("product-list")) {
      console.log("read from cache KKKKKKKKKKKKKKKKKK ");
      return res.send(readFromCache("product-list")).status(200);
    }
    return next();
  } catch (err) {
    throw err;
  }
};

const cachingMiddleWare = (req, res, next) => (cacheMemory) => {
  cacheMemory();
  try {
    if (cacheMemory.hasData()) {
      console.log("read from cache 2::::: ");
      return res.send(cacheMemory.read()).status(200);
    }
    return next();
  } catch (err) {
    throw err;
  }
};

module.exports = {
  cachingMiddleWare,
  cachingMiddleWare2,
};
