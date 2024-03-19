const express = require('express')
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router()
const adminData = require('./admin')

router.get('/', (req, res, next) =>{
   const products = adminData.products
   res.render('shop', {prod: products, Doctitle: 'Shop'})
})             

module.exports = router