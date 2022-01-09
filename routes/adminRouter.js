require('dotenv').config()

const express = require('express');
const router = express.Router();

const adminService = require('../service/adminService');

const Product = require('../model/Product');

const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require("multer-s3");
const s3 = new aws.S3();

aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    region: "us-east-2",
  });

  const upload = multer({
    storage: multerS3({
      acl: "public-read",
      s3,
      bucket: 'cheri-images-storage',
      metadata: function (req, file, cb) {
        cb(null, { fieldName: "TESTING_METADATA" });
      },
      key: function (req, file, cb) {
          console.log(file);
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
      },
    }),
  });

// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, './uploads/');
//     },
//     filename: function(req, file, cb){
//         cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
//     }
// });
// const upload = multer({storage: storage});

//Add Product
router.post('/addProduct', upload.array('productImages'), (req, res, next)=>{
    console.log("File",req.files);
    imagePaths = req.files.map(data=>data.location)
    const product = new Product({
        // _id: new mongoose.Types.ObjectId(),
        productId: req.body.productId,
        productName: req.body.productName,
        productDesc: req.body.productDesc,
        productCare: req.body.productCare,
        xs: req.body.xs,
        s: req.body.s,
        m: req.body.m,
        l: req.body.l,
        xl: req.body.xl,
        productImages: imagePaths
    });
    adminService.addProduct(product).then(result => {
        if (result != null)
            res.json("Product added successfully");
    }).catch(err => next(err));
})

module.exports = router;