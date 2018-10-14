var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var discountSchema = new Schema({
    discount_amount: {
        type: Number
    }
    
});

module.exports = discountSchema;