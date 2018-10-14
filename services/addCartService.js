
const mongoose = require('mongoose');
module.exports = {

addCart: (req, res) => {

    var shoppingcarts = require('../models/shoppingCart.js');
    var ShoppingCart = mongoose.model('shoppingcarts',shoppingcarts);

    var myData = new ShoppingCart({
        user_id: req.body.user_id,
        product_Id: req.body.product_Id,
               });
               myData.save(function (err) {
                if (err) {
                   
                    info = {
                        status: false,
                        msg: "failed " + err
                    }
                }
                else {

                    info = {
                        status: true,
                        msg: "Successfully added"
                    }
                }
                res.send(info);
                res.end();
            });

        }
}
