const mongoose = require('mongoose');
module.exports = {
    getProductByColor: (req, res) => {
     
        var productByColor = require('../models/product.js');
        var ProductByColor = mongoose.model('products', productByColor);
        var info={};
        ProductByColor.find({product_color:req.query.product_color}, (err, doc) => {
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