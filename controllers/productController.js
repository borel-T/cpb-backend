const shopifyProducts = require("../services/shopify/shopifyProductService");
const productCache = require("../caching/productCaching");
const { refineProducts } = require("./utils");

const getAll = async (req, res) => {
  try {
    let data = await shopifyProducts.getAll();
    let products = refineProducts(data);
    productCache.write(products);

    res.status(200).json({ data: products });
  } catch (error) {
    res.status(500).json({
      message: error,
      data: [],
    });
  }
};

module.exports = {
  getAll,
};
