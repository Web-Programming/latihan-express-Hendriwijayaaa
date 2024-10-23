const mongoose = require("mongoose");

//Create Collection Schema
const mahasiswaSchema = new mongoose.Schema({
    nama : {
        type : String,
    },
    npm : {
        type: String,
        required: true,
    },
    email : {
        type : String,
        required: true,
        unique: true,
    },
    tanggal_lahir: {
        type: Date,
    },
    aktif: {
        type: Boolean,
    }
});


//create Model from Schema

//mongoose.model("Mahasiswa", schemaMhs);
const Mahasiswa = mongoose.model("Mahasiswa", mahasiswaSchema);
module.exports = Mahasiswa;