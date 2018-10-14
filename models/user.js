var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema({
    user_firstName: {
        type: String
    },
    user_lastName: {
        type: String
    },
    user_password: {
        type: String
    },
    user_email : {
        type: String
    },
    user_contact: {
        type: Number
    },
    user_address: {
        type:[String]
    },
    user_amount: {
        type:[String]
    }
    
});

module.exports = userSchema;