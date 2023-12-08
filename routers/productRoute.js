const { Router } = require("express");
const middleWare = require("../midWares");
const productController = require("../controllers/productController.js");

const router = Router();

// get all products
router.get("/", middleWare.productCacheMiddleWare, productController.getAll);

module.exports = router;
