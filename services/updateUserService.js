var mongoose = require('mongoose');

module.exports = {


    updateUser: (req, res) => {

        var users = require('../models/user.js');
        var User = mongoose.model('users', users);

        var info = {};
        User.findOneAndUpdate({ "user_email": req.query.user_email }, {
            $set: {
                user_firstName: req.body.user_firstName,
                            user_lastName: req.body.user_lastName,
                            user_contact: req.body.user_contact,
                            user_address: req.body.user_address
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
                        msg:"user details updated successfully"
                    }
                    
                }
                else {
                    console.log("inside");
                    info = {
                        stat: false,
                        msg: "User not Found"
                    }
                }
            };
            res.send(info);
            res.end();
        });
        
      
    }
}

