const mhsController = require('../controllers/controllerMahasiswa'); 
const express = require('express');
const router = express.Router();

router.get("/", mhsController.index); 
router.post("/insert", mhsController.insert);
router.patch("/update/:id", mhsController.update); 
router.get("/show/:id", mhsController.show);
router.delete("/delete/:id", mhsController.destroy); 

module.exports = router;
