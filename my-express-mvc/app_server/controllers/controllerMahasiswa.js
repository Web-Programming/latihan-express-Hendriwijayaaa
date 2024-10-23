Mahasiswa = require("../models/mahasiswa");

//untuk menghandle request get all mahasiswa
exports.Index = async (req, res) => {
    try{
        const mahasiswas = await Mahasiswa.find({});
        res.status(200).json(mahasiswas);
        if(!mahasiswas){
            res.status(404).json({ message: "Collection is Empty"});
        }
    }catch (errror) {
        res.status(500).json({ message: "Error retrieving users", erorr});
    }
    
}