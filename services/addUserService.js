var mongoose = require('mongoose');
var fetch = require('node-fetch');

module.exports = {


    addUser: (req, res) => {

        var users = require('../models/user.js');
        var User = mongoose.model('users', users);

        var info = {};
        User.findOne({ user_email: req.body.user_email }, (err, docs) => {

            if (err) {

                info = {
                    status: false,
                    msg: err.data
                }
                res.send(info);
                res.end();

            } else {

                if (docs != null) {
                    info = {
                        status: false,
                        msg: "Email already registered, Try again...!"
                    }
                    res.send(info);
                    res.end();
                } else {

            

                                var user = new User({
                                    user_firstName: req.body.user_firstName,
                                    user_lastName: req.body.user_lastName,
                                    user_password: req.body.user_password,
                                    user_email: req.body.user_email,
                                    user_contact: req.body.user_contact,
                                    user_address: [],
                                    user_amount:0

                                });
                                user.save(function (err) {

                                    if (err) {

                                        info = {
                                            status: false,
                                            msg: "Failed to register " + err
                                        }
                                    }
                                    else {

                                        info = {
                                            status: true,
                                            msg: "Successfully registered.......!"
                                        }
                                    }
                                    res.send(info);
                                    res.end();
                                });
                }

            };

        });

    }
}

