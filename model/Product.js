class Product {
    constructor( obj ) {
        this.productId = obj.productId;
        this.productName = obj.productName;
        this.productDesc = obj.productDesc;
        this.productCare = obj.productCare;
        this.productPrice = obj.productPrice;
        this.productImages = obj.productImages;
        this.size = [{
            sizeInfo: obj.sizeInfo,
            sizeQty: obj.sizeQty
        }]
    }
}
module.exports = Product;