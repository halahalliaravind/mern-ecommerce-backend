// const express = require("express");
// const category = require("../models/category");
// // const { addCategory, getCategories } = require("../controller/category");
// const { requireSignin, adminMiddleware } = require("../common-middleware");
// const router = express.Router();

// const Product = require("../models/product");

// router.post("/product/create", requireSignin, adminMiddleware, (req, res) => {
//   res.status(200).json({ message:'Hello aravind lets build Logic for productsss' });
// });

// // router.get("/category/getcategory", getCategories);

// module.exports = router;

const express = require("express");
const { requireSignin, adminMiddleware } = require("../common-middleware");
const { createProduct } = require("../controller/product");
const router = express.Router();

router.post("/product/create", requireSignin, adminMiddleware, createProduct);

module.exports = router;