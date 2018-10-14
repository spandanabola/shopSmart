const mongoose = require('mongoose');
module.exports = {
    getProductById: (req, res) => {
     
        var productById = require('../models/product.js');
        var ProductById = mongoose.model('products', productById);
        var info={};
        ProductById.findOne({_id:req.query.product_Id}, (err, doc) => {
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