const { readFromCache, cacheHasData } = require("../caching/index");

const cachingMiddleWare2 = (req, res, next) => {
  try {
    if (cacheHasData("product-list")) {
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
