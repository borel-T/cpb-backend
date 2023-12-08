// util methods

function refineProducts(data) {
  return data.products.edges.map((item) => item.node);
}

module.exports = {
  refineProducts,
};
