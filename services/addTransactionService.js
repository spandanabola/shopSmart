var mongoose = require('mongoose');
var fetch = require('node-fetch');

module.exports = {


    addTransaction: (req, res) => {

        var transactions = require('../models/transaction.js');
        var Transaction = mongoose.model('transactions', transactions);
        var users = require('../models/user.js');
        var User = mongoose.model('users', users);
        var products = require('../models/product.js');
        var Product = mongoose.model('products', products);
        var info = {};

        var transaction = new Transaction({
            transaction_amount: req.body.transaction_amount,
            transaction_time: new Timestamp(),
            transaction_mode: req.body.transaction_mode,
            quantity: req.body.quantity,
            userId: req.body.user.user_email,
            cashback_amount: req.body.cashback.cashback_amount,
            cashback_id: req.body.cashback.cashback_id,
            product_id:req.body.product.product_id,
            user_amount:req.body.user.user_amount
        });
        transaction.save(function (err) {

            if (err) {

                info = {
                    status: false,
                    msg: "Failed" + err
                }
            }
            else  {
               var quantity=req.body.product.product_quantity-req.body.quantity;
               var cashback=req.body.user.user_amount+cashback_amount;
                this.updateProduct(req.body.product._id,quantity);
                this.updateUser(req.body.user.user_email,cashback);
                info = {
                    stat: true,
                    msg:"Your order placed successfully"
                }
         
            }
            res.send(info);
            res.end();
        });
       
      




        
    }

}


function updateProduct(productId,quantity){

    var products = require('../models/product.js');
        var Product = mongoose.model('products', products);
    Product.findOneAndUpdate({ "_id": productId}, {
        $set: {
            product_quantity: quantity    
        }
    }).exec((err, docs) => {
        if (err) {
            info = {
                stat: false,
                msg: err
            }

            //console.log(docs);

        } else {
            //res.json({ error: err });
            if (docs != null) {

                info = {
                    stat: true,
                    msg:"Quantity has been updated successfully"
                }
                
            }
            else {
                console.log("inside");
                info = {
                    stat: false,
                    msg: "It is not updated"
                }
            }
        };
    
    });
}


function updateUser(user_email,user_amount){
    var users = require('../models/user.js');
    var User = mongoose.model('users', users);

    User.findOneAndUpdate({ "user_email": user_email }, {
        $set: {
            user_amount: user_amount,
            
        
        }
    }).exec((err, docs) => {
        if (err) {
            info = {
                stat: false,
                msg: err
            }

            //console.log(docs);

        } else {
            //res.json({ error: err });
            if (docs != null) {

                info = {
                    stat: true,
                    msg:"Cashback has been updated successfully"
                }
                
            }
            else {
                console.log("inside");
                info = {
                    stat: false,
                    msg: "It is not updated"
                }
            }
        };
    });
    

}

      
