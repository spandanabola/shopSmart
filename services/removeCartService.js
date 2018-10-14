const mongoose = require('mongoose');
module.exports = {
    removeCart: (req, res) => {
    var info={};
    var shoppingcarts = require('../models/shoppingCart.js');
    var ShoppingCart = mongoose.model('shoppingCarts',shoppingcarts);
    
    ShoppingCart.remove({ product_Id: req.query.product_id }, (err, doc) => {
                    if (err) {
                       
                        info = {
                            status: false,
                            msg: err
                        }
    
                    } else {
                       
                            info = {
                                status: true,
                             
                            }
                       
                    };
                    res.send(info);
                    res.json(doc);
                    res.end();
                });

            }}