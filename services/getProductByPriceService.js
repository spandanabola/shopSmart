const mongoose = require('mongoose');
module.exports = {
    getProductByPrice: (req, res) => {
     
        var productByPrice = require('../models/product.js');
        var ProductByPrice = mongoose.model('products', productByPrice);
        var info={};
        ProductByPrice.find({product_price:{'$gte':1000}}, (err, doc) => {

            if (err) {
               
                info = {
                    status: false,
                    msg: err
                }

            } else {
               
                info = {
                    status: true,
                    model:doc
                }
        
            };
            res.send(info);
            res.end();
        });
    }
}