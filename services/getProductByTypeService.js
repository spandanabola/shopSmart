const mongoose = require('mongoose');
module.exports = {
    getProductByType: (req, res) => {
     
        var productByType = require('../models/product.js');
        var ProductByType = mongoose.model('products', productByType);
        var info={};
        ProductByType.find({product_type:req.query.product_type}, (err, doc) => {
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