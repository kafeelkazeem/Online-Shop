const Product = require('../models/product')

exports.getAddProduct = (req, res, next) =>{
    res.render('add-product', {path: '/admin/add-product'})
}

exports.postAddProduct = (req, res, next) =>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/")
}

exports.getProduct = (req, res, next) =>{
    const products = Product.fetchAll()
    res.render('shop', {prod: products, Doctitle: 'Shop', path: '/'})
 }