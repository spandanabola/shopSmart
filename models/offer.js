var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var offerSchema = new Schema({
    offer_Name: {
        type: String
    },
    offer_code: {
        type: String
    },
    offer_start: {
        type: String
    },
    offer_end: {
        type: String
    },
});

module.exports = offerSchema;