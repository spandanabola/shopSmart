var express = require("express");
var router = express.Router();

var addCartService = require('../services/addCartService');

var removeCartService = require('../services/removeCartService');

var getCartService = require('../services/getCartService');




router.post("/addCart", addCartService.addCart);

router.post("/removeCart", removeCartService.removeCart);

router.get("/getCart", getCartService.getCart);



module.exports = router;
