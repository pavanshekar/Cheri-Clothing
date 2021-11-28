const admindb = require('../model/adminModel')

let AdminService = {}

//Add product
AdminService.addProduct = (ProductObj)=>{
    return admindb.addProduct(ProductObj).then((data) => {
        if (data) {
            return data;
        }
        else {
            let err = new Error("Unable to add the product");
            err.status = 404;
            throw err;
        }
    })
}

module.exports = AdminService;