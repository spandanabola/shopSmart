
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var storeSchema = new Schema({
    store_name:{
        type:String
    },
    store_address:{
        type:[String]
    }
});

module.exports = storeSchema;