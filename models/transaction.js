var mongoose = require("mongoose");
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
var transactionSchema = new Schema({
    transaction_amount: {
        type: Number
    },
    transaction_time: {
        type: Date
    },
    transaction_mode: {
        type: String
    },
    quantity:{
        type: Number
    },
    product_Id: {
        type: ObjectId
    },
    userId: {
        type: String
    },
    cashback_id:{
        type: ObjectId
    },
    cashback_amount:{
        type:Number
    }
});

module.exports = transactionSchema;