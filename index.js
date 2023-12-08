const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();

// routes
const productRoute = require("./routers/productRoute.js");

app.use("/api/v1/products", productRoute);

app.listen(process.env.PORT || 4000, (err) => {
  if (err) {
    console.log("error launching server");
  }
  console.log("server is live on port : 4000");
});
