var mongoose = require("mongoose");
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
var productSchema = new Schema({  
    product_Name: {
        type: String
    },
    product_Image: {
        type: String
    },
    product_price: {
        type: Number
    },
    product_quantity:{
        type: Number
    },
    product_url: {
        type: String
    },
    product_type: {
        type: String
    },
    product_color: {
        type: String
    },
    discount:{
        type:Number
    }
    
  //  discount: {discountSchema}  
    
});

module.exports = productSchema;