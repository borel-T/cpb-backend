import express from "express";
const app = express();
import nodeFetch from "node-fetch";
import cors from "cors";
import * as shopify from "@shopify/admin-api-client";

app.use(cors());

const client = shopify.createAdminApiClient({
  storeDomain: "https://cpb-new-developer.myshopify.com",
  apiVersion: "2023-10",
  accessToken: "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",
});

console.log("shopify-client", client.config);

app.get("/api/products", async (req, res) => {
  const productQuery = `query {
  products(first: 3) {
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

  const { data, errors, extensions } = await client.request(productQuery);
  console.log("data:-->", data);
  console.log("errors->", errors);
  console.log("extensions-->", errors);

  if (errors) {
    res.status(400).json({ error: "request error", errors });
  }

  res.status(200).json({ data });
});

app.listen(3000, (err) => {
  if (err) {
    console.log("error launching server");
  }
  console.log("server on : 4000");
});
