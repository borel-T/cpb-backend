const { productCache } = require("../caching");

const productCacheMiddleWare = (req, res, next) => {
  try {
    if (productCache.hasData()) {
      return res.send(productCache.read()).status(200);
    }
    return next();
  } catch (err) {
    throw err;
  }
};

module.exports = productCacheMiddleWare;
