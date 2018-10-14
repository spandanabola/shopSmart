var express = require("express");
var router = express.Router();

var getProductByIdService = require('../services/getProductByIdService');

var getProductByTypeService = require('../services/getProductByTypeService');

var getProductByColorService = require('../services/getProductByColorService');

var getProductByPriceService = require('../services/getProductByPriceService');

var getOffersService = require('../services/getOffersService');

var addTransactionService = require('../services/addTransactionService');

var transactionModeService = require('../services/transactionModeService');



var getStoresService = require('../services/getStoresService');

router.get("/getProductById", getProductByIdService.getProductById);

router.get("/getProductByType", getProductByTypeService.getProductByType);

router.get("/getProductByColor", getProductByColorService.getProductByColor);

router.get("/getProductByPrice", getProductByPriceService.getProductByPrice);

router.get("/getOffers", getOffersService.getOffersByDate);

router.get("/getStores", getStoresService.getStores);

router.get("/addTransaction", addTransactionService.addTransaction);

router.get("/transactionMode", transactionModeService.transactionMode);

module.exports = router;


