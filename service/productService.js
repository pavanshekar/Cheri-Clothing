const Product = require('../model/Product');
const productdb = require('../model/productModel');

let ProductService = {}

//To get all products
ProductService.getAllProducts = ()=>{
    return productdb.getAllProducts().then(products=>{
        if(products.length == 0){
            let error = new Error("No products found in the database");
            error.status = 404;
            throw error;
        }
        else 
            return products;
    })
}

//Individual Product
ProductService.getIndvProduct = (productId)=>{
    return productdb.getIndvProduct(productId).then(product=>{
        if(product.length == 0){
            let error = new Error("No products found in the database");
            error.status = 404;
            throw error;
        }
        else 
            return product;
    })
}

module.exports = ProductService;