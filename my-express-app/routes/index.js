var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title:'Express'} );
});

router.get('/about', function(req, res, next) {
  res.render('about',{title:'About Us'} );
});

router.get('/paketwisata', function(req, res, next) {
  res.send(' paketwisata'{title: 'paket wisata'});
});

router.get('/orderpaket', function(req, res, next) {
  res.send(' orderpaket'{title: 'form pemesanan paket wisata'});
});

router.get('/orderdetail', function(req, res, next) {
  res.send(' orderdetail'{title: 'detail pemesanan paket'});
});

module.exports = router;
