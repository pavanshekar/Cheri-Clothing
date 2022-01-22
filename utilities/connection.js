const mongoose = require("mongoose")
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema

// const mongo = {
//     url: 'mongodb+srv://cheri:Cheri1234@cheri.rigxw.mongodb.net/Cheri?retryWrites=true&w=majority',
//     opt: {
//         useNewUrlParser: true
//     }
// };

URI = 'mongodb+srv://cheri:Cheri1234@cheri.rigxw.mongodb.net/Cheri?retryWrites=true&w=majority';

let connection = {};

const userSchema = Schema({
    userId: { type: String },
    name: { type: String },
    emailId: { type: String, unique: true },
    password: { type: String },
    contactNo: { type: Number },
    city: { type: String },
    state: { type: String },
    pincode: { type: Number },
}, { collection: "User" });

const productSchema = Schema({
    productId: { type: String, unique: true },
    productName: { type: String },
    productDesc: { type: String },
    productCare: { type: String },
    productPrice: { type: Number },
    size: [{
        sizeInfo: { type: String },
        sizeQty: { type: Number}
    }],
    productImages: [{
        type: String
    }]
    
}, { collection: "Product" });

const cartSchema = Schema({
    userId: { type: String },
    items: {
        productId: { type: String},
        quantity: { type: Number}
    }
}, { collection: "Cart"});

connection.getUserCollection = () => {
    return mongoose.connect(URI, {useNewUrlParser: true}).then((database) => {
        console.log("Connected to Cheri database");
        return database.model('User', userSchema)
    }).catch((error) => {
        console.log(error.message);
        let err = new Error("Could not connect to database");
        err.status = 500;
        throw err;
    })
}

connection.getProductCollection = () => {
    return mongoose.connect(URI, {useNewUrlParser: true}).then((database) => {
        console.log("Connected to Cheri database");
        return database.model('Product', productSchema)
    }).catch((error) => {
        console.log(error.message);
        let err = new Error("Could not connect to database");
        err.status = 500;
        throw err;
    })
}

connection.getCartCollection = () => {
    return mongoose.connect(URI, {useNewUrlParser: true}).then((database) => {
        console.log("Connected to Cheri database");
        return database.model('Cart', cartSchema)
    }).catch((error) => {
        console.log(error.message);
        let err = new Error("Could not connect to database");
        err.status = 500;
        throw err;
    })
}

module.exports = connection;