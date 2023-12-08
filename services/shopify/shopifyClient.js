// shopify graphQl Admin Client
const shopify = require("@shopify/admin-api-client");
require("dotenv").config();

const client = shopify.createAdminApiClient({
  storeDomain: process.env.SHOPIFY_STORE_DOMAIN,
  apiVersion: process.env.SHOPIFY_API_VERSION,
  accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
});

module.exports = client;
