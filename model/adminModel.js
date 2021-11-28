const collection = require('../utilities/connection');

const adminModel = {}

//Add product
adminModel.addProduct = (newProduct)=>{
    return collection.getProductCollection().then(adminModel => {
        return adminModel.create(newProduct).then(data => {
            if (data)
                return true;
            else
                return false;
        })
    })
}

module.exports = adminModel;