class Product {
    constructor( obj ) {
        this.productId = obj.productId;
        this.productName = obj.productName;
        this.productDesc = obj.productDesc;
        this.productCare = obj.productCare;
        this.productPrice = obj.productPrice;
        this.productImages = obj.productImages;
        this.xs = obj.xs;
        this.s = obj.s;
        this.m = obj.m;
        this.l = obj.l;
        this.xl = obj.xl;
    }
}
module.exports = Product;