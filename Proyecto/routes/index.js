var express = require('express');
var router = express.Router();
const Peliculas = require('../config/esquemas');
require('../config/conexion');

router.get('/peliculas', (req, res) => {
    Peliculas.find().then(result => {
        res.status(200).json({
            peliculas: result
        });
    });
});

router.get('/peliculas/:id', (req, res) => {
    Peliculas.findOne({'_id': req.params.id}).then(result => {
        res.status(200).json({
            peliculas: result
        });
    });
});

router.post('/peliculas', (req, res, next) => {
    const pelicula = new Peliculas({
        _id: req.body._id,
        titulo: req.body.titulo,
        anno: req.body.anno,
        genero: req.body.genero,
        duracion: req.body.duracion,
        sinopsis: req.body.sinopsis,
        director: req.body.director,
        reparto: req.body.reparto
    });
    pelicula.save();
    res.status(200).json({
        message: 'Producto Agregado'
    });
});

router.delete('/peliculas/:id', (req, res, next) => {
    Peliculas.deleteOne({'_id': req.params.id}).then(result => {
        res.status(200).json({message: "Producto eliminado"});
    });
});

router.get('/',(req,res,next) =>{
    res.render('desarrollador')
})

router.get('/archiDocker',(req,res,next) =>{
    res.render('archiDocker')
})

router.get('/contenedor',(req,res,next) =>{
    res.render('contenedor')
})

router.get('/direcDocker',(req,res,next) =>{
    res.render('direcDocker')
})

router.get('/imgDocker',(req,res,next) =>{
    res.render('imgDocker')
})

router.get('/introDocker',(req,res,next) =>{
    res.render('introDocker')
})

router.get('/vidaContenedor',(req,res,next) =>{
    res.render('vidaContenedor')
})

module.exports = router;
