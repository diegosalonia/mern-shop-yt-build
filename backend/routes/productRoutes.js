const express = require('express');
const { getAllProducts, getProduct } = require('../controller/productControlers');
const router = express.Router();

// description GET all products from db
// route GET /api/products
// access Public
router.get('/', getAllProducts);

// description GET a product by id from db
// route GET /api/products/:id
// access Public
router.get('/', getProduct);

module.exports = router;