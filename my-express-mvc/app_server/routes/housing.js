var express = require('express');
var router = express.Router();

var housingController = require('../controllers/controllerHousing');


/* GET home page. */
router.get('/', housingController.index);

module.exports = router;
