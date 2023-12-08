const shopifyClient = require("./shopifyClient");

// get all products
async function getAll() {
  // query
  const productQuery = `query {
  products(first: 100) {
    edges {
      node {
        id
        bodyHtml
        images (first:2) {
          nodes {
            src
          }
        }
      }
    }
  }
  }`;

  const { data, errors, extensions } = await shopifyClient.request(
    productQuery
  );

  if (errors) {
    throw new Error("shopify request error");
  }

  return data;
}

module.exports = {
  getAll,
};
