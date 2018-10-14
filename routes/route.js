var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
    //res.send("Hello wORLD");
    res.end();

})

var addUserService = require('../services/addUserService');

router.post("/addUser", addUserService.addUser);


module.exports = router;