var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/paketwisata', function(req, res, next) {
  let.paketwisata = [
    {'nama' : 'wisata pulau kemarau', 'harga' :50000},
    {'nama' : 'wisata punti kayu', 'harga' :10000},
    {'nama' : 'wisata jakabaring', 'harga' :20000},
  ]
  res.render('paketwisata' , {
    title: 'paket wisata',
    listpaketwisata: listpaketwisata
  });
});

router.get('/orderpaket', function(req, res, next) {
  res.send(' orderpaket',{title: 'form pemesanan paket wisata'});
});

router.get('/orderdetail', function(req, res, next) {
  res.send(' orderdetail',{title: 'detail pemesanan paket'});
});

module.exports = router;
