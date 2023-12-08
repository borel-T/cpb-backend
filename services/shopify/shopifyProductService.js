const shopifyClient = require("./shopifyClient");

// get all products
async function getAll() {
  // query
  const productQuery = `query {
  products (first:10) {
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

  const { data, errors } = await shopifyClient.request(productQuery);

  if (errors) {
    throw new Error(errors.message);
  }

  return data;
}

module.exports = {
  getAll,
};
