var express = require("express");
var router = express.Router();


// var checkUserService = require('../services/checkUserService');

 var userLoginService= require('../services/userLoginService');

var updateUserService = require('../services/updateUserService');



// router.post("/checkUser", checkUserService.checkUser);
router.post("/userLogin", userLoginService.userLogin);

router.post("/updateUser", updateUserService.updateUser);
//  router.post("/addUser", updateUserService.updateUser);



module.exports = router;

