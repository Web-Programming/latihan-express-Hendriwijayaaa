const express = require("express");
const router = express.Router();
const AppController = require("../controllers/controllerApp")

    router.post('/', AppController.insert);

module.exports = router;