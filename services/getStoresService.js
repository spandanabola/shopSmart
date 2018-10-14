const mongoose = require('mongoose');
module.exports = {
    getStores: (req, res) => {
        
       
        var stores = require('../models/store.js');
        var Store = mongoose.model('stores', stores);
        var info={};
        Store.find({}, (err, docs) => {
            if (err) {
              
                info = {
                    status: false,
                    msg: err
                }

            } else {
              
                info = {
                    status: true,
                    models:docs
                }
           
            };
            res.send(info);
            res.end();
        });
    }
}