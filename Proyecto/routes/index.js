var express = require('express');
var router = express.Router();
const Peliculas = require('../config/esquemas');
require('../config/conexion');
//METODO GET
router.get('/peliculas', (req, res) => {
    Peliculas.find().then(result => {
        res.status(200).json(result);
    });
});
//METODO GET POR ID
router.get('/peliculas/pelicula/:id', (req, res) => {
    Peliculas.findOne({'_id': req.params.id}).then(result => {
        res.status(200).json(result);
    });
});
//METODO POST
router.post('/peliculas/add', (req, res, next) => {
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
//METODO PUT
router.put('/peliculas/:id', (req, res) => {
    Peliculas.findByIdAndUpdate({'_id': req.params.id}, {
        id: req.params.id,
        titulo: req.body.titulo,
        anno: req.body.anno,
        genero: req.body.genero,
        duracion: req.body.duracion,
        sinopsis: req.body.sinopsis,
        director: req.body.director,
        reparto: req.body.reparto
    }, function (err, result) {
        if (err) {
            console.log(err)
        }
        if (!result) {
            res.status(404).json({message: "Pelicula no encontrada"})
            var pelicula = Peliculas({
                _id: req.params.id,
                titulo: req.body.titulo,
                anno: req.body.anno,
                genero: req.body.genero,
                duracion: req.body.duracion,
                sinopsis: req.body.sinopsis,
                director: req.body.director,
                reparto: req.body.reparto
            });
            pelicula.save();
        } else {
            res.status(200).json({
                message: 'Producto actualizado'
            })
        }
    });
});
//METODO PATCH
router.patch('/peliculas/:id', (req, res) => {
    Peliculas.findByIdAndUpdate({'_id': req.params.id}, {
        id: req.params.id,
        titulo: req.body.titulo,
        anno: req.body.anno,
        genero: req.body.genero,
        duracion: req.body.duracion,
        sinopsis: req.body.sinopsis,
        director: req.body.director,
        reparto: req.body.reparto
    }, function (err, result) {
        if (err) {
            console.log(err)
        }
        if (!result) {
            res.status(404).json({message: "Pelicula no encontrada"})
        } else {
            res.status(200).json({
                message: 'Producto actualizado'
            })
        }

    });
});
//METODO DELETE
router.delete('/peliculas/:id', (req, res, next) => {
    Peliculas.deleteOne({'_id': req.params.id}).then(result => {
        res.status(200).json({message: "Producto eliminado"});
    });
});

router.get('/desarrollador', (req, res, next) => {
    res.render('desarrollador')
})

router.get('/archidocker', (req, res, next) => {
    res.render('archiDocker')
})

router.get('/contenedor', (req, res, next) => {
    res.render('contenedor')
})

router.get('/direcdocker', (req, res, next) => {
    res.render('direcDocker')
})

router.get('/imgdocker', (req, res, next) => {
    res.render('imgDocker')
})

router.get('/introdocker', (req, res, next) => {
    res.render('introDocker')
})

router.get('/vidacontenedor', (req, res, next) => {
    res.render('vidaContenedor')
})

module.exports = router;
