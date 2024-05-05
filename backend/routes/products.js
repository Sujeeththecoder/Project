// routes/products.js

const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Other routes for CRUD operations, authentication, and authorization

module.exports = router;
