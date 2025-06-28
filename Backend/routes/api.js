console.log("✅ API routes file loaded");

const express = require('express');
const router = express.Router();

const adminAPI = require('../controllers/api');
const shopAPI = require('../controllers/apiShop');

// Product APIs
router.post('/add-product', adminAPI.apiAddProduct);
router.get('/products', shopAPI.apiGetProducts);

module.exports = router;
