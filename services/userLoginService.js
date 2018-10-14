var mongoose = require('mongoose');
//var urls = require('./urls');
var fetch = require('node-fetch');

module.exports = {


    userLogin: (req, res) => {

        var users = require('../models/user.js');
        var User = mongoose.model('users', users);

        User.findOne({ user_email: req.body.user_email, user_password:req.body.user_password }, (err, docs) => {

            if (err) {

                info = {
                    status: false,
                    msg: err.data
                }
              
            } else {

                
                    if(docs!=null){
                        info = {
                            status: true,
                            user: docs
                        }
                    }else{
                        info = {
                            status: false,
                            msg: "User Doesn't Exist"
                        }
                    }
            


                                       
                                 
                                  
                             
                

            };
            res.send(info);
            res.end();
        });


    }
}


