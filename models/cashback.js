var mongoose = require("mongoose");
var Schema = mongoose.Schema , ObjectId = Schema.ObjectId;
var cashbackSchema = new Schema({
    bonus_criteria: {
        type: Number
    },
    bonus_amount: {
        type: Number
    },
    bonus_description: {
        type: String
    },
    bonus_name: {
        type: String
    }
});

module.exports = cashbackSchema;