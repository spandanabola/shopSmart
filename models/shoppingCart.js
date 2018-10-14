var mongoose = require("mongoose");
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
var shoppingCartSchema = new Schema({
    user_id: {
        type: String
    },   
    product_Id : {
        type: ObjectId
    }
});

module.exports = shoppingCartSchema;