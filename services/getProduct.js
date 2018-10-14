const mongoose = require('mongoose');
module.exports = {
    getProduct: (data, callback) => {
     
        var info={};
        var products = require('../models/product.js');
        var Product = mongoose.model('products', products);
        console.log("product_id:"+data);
        Product.findOne({ _id: data }, (err, doc) => {
    
            if (err) {
    
                info = {
                    status: false,
                    msg: err
                }
    
            } else {
                if (doc != null) {
                    info = {
                        status: true,
                        model: doc
                    }
                } else {
                    console.log("find hwew")
                    info = {
                        status: false,
                        msg: "Product Not Exist"
                    }
                   
                }
    
    
    
            };
            callback(info);
    
        });
    }
}