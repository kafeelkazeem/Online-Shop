const Product = require('../models/product')

exports.getAddProduct = (req, res, next) =>{
    res.render('admin/add-product', {path: '/admin/add-product'})
}

exports.postAddProduct = (req, res, next) =>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/")
}

exports.getProduct = (req, res, next) =>{
    Product.fetchAll((products) =>{
        res.render('shop/product-list', {prod: products, Doctitle: 'Shop', path: '/'})
    })
 }

 exports.getCart = (req, res, next) => {
    res.render('shop/cart')
 }