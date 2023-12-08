// util methods

function refineProducts(data) {
  return data.products.edges.map((item) => ({
    id: item.node.id,
    bodyHtml: item.node.bodyHtml,
    images: item.node.images?.nodes,
  }));
}

module.exports = {
  refineProducts,
};
