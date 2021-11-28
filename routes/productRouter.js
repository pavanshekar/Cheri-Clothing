const express = require('express');
const router = express.Router();

const productService = require('../service/productService');

const Product = require('../model/Product');

//All products
router.get('/products', (req, res, next)=>{
    productService.getAllProducts().then(result=>{
        res.status(200).json(result)
    }).catch(err=>next(err))
})

//Individual Product
router.get('/product/:productId', (req, res, next)=>{
    productService.getIndvProduct(req.params.productId).then(result=>{
        res.status(200).json(result)
    }).catch(err=>next(err))
})

module.exports = router;