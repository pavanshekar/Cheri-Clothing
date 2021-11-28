const collection = require('../utilities/connection');

const productModel = {}

//To get all products
productModel.getAllProducts = () => {
    return collection.getProductCollection().then(model => {
        return model.find().then(products => products)
    })
}

//Individual Product
productModel.getIndvProduct = (productId) => {
    return collection.getProductCollection().then(model => {
        return model.findOne({'productId': productId}).then(product => product)
    })
}

module.exports = productModel;