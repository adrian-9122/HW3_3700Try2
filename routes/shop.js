const express = require('express');
const router = express.Router();
const phonesController = require("../controllers/shopController");

router.get( '/showCustomers', phonesController.getCustomers);
router.get( '/home', phonesController.showHome);
router.get( '/', phonesController.showHome);
// router.get('/showSales', {});

module.exports = router;