const express = require('express')
const path = require('path')
const router = express.Router()
const productController = require('../controllers/products')

router.get('/', productController.getProduct)             

module.exports = router