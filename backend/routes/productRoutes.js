const express = require('express');
const { getProducts, getProductById } = require('../controller/productControlers');
const router = express.Router();

// description GET all products from db
// route GET /api/products
// access Public
router.get('/', getProducts);

// description GET a product by id from db
// route GET /api/products/:id
// access Public
router.get('/:id', getProductById);

module.exports = router;