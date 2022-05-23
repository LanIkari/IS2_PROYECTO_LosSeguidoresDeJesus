var express = require('express');
var router = express.Router();
const Peliculas = require('../config/modelos');
require('../config/conexion');

router.get('/peliculas', (req, res) => {
  Peliculas.find().then(result => {
    res.status(200).json({
      peliculas: result
    });
  });
});

module.exports = router;
