const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/controllerMahasiswa");

// Fungsi dan rute index kita gunakan untuk memanggil semua data dalam database MongoDB
router.get("/mahasiswa", mahasiswaController.Index);
module.exports = router;