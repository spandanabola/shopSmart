const mongoose = require('mongoose');
const getPro = require('./getProduct');
module.exports = {
    getCart: (req, res) => {
        var shoppingcarts = require('../models/shoppingCart.js');
        var ShoppingCart = mongoose.model('shoppingcarts', shoppingcarts);

        ShoppingCart.find({ user_id: 'spandanabola@gmail.com' }, (err, docs) => {
            if (err) {

                info = {
                    status: false,
                    msg: err
                }

            } else {
                var count=0;
                var products=[];
                for (var i = 0; i < docs.length; i++) {
                   console.log(docs[i]);

                        getPro.getProduct(docs[i].product_Id, function (response) {
                            count=count+1
                            console.log("count:=" + count)
                            console.log(response);
                            if(response.status==true){
                                products.push({
                                    "_id":docs[count-1]._id,
                                    "user_id":docs[count-1].user_id,
                                    "product":response.model,
                                    "product_Id":docs[count-1].product_Id
                                });
                               // products[count-1].product=response.model;
                                // docs[count-1].product = ;
                            }else{
                                products.push({
                                    "_id":docs[count-1]._id,
                                    "user_id":docs[count-1].user_id,
                                    "product_Id":docs[count-1].product_Id,
                                    "msg":response.msg
                                });
                                // products.push(docs[count-1]);
                                // products[count-1].msg=response.msg;
                                // console.log(products[count-1]);
                            }

                            
                        if (count==docs.length) {
                            console.log("count:=" + count)
                            console.log("print final docs:");
                            console.log(products);
                            info = {
                               status: true,
                                models: products  
                            }
                            res.send(info);
                            res.end();
                        }
                            
                        });



                }


            };

          
        });

     }

}

// function getProduct(productId, callback) {
//     var products = require('../models/product.js');
//     var Product = mongoose.model('products', products);
//     Product.findOne({ _id: productId }, (err, doc) => {

//         if (err) {

//             callback("err");

//         } else {
//             if (doc != null) {
//                 callback(doc);
//             } else {
//                 console.log("find hwew")
//                 callback("Product Not Exist");
//             }



//         };

//     });
// }
