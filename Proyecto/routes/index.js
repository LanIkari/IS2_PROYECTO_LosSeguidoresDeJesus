const express = require('express');
const cors = require('cors');
const router = express.Router();
const Peliculas = require('../config/esquemas');
require('../config/conexion');


const whitelist = ['http://localhost:4200/', 'http://localhost:4200/peliculas'];
const options = {
    options: (origin, callback) => {
        if (whitelist.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
router.use(cors());
router.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");
    next();
});

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
            const pelicula = Peliculas({
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


router.get('/', (req, res) => {
    res.render('index');
});

router.get('/archidocker', (req, res, next) => {
    res.render('archidocker')
})

router.get('/contenedor', (req, res, next) => {
    res.render('contenedor')
})

router.get('/direcdocker', (req, res, next) => {
    res.render('direcdocker')
})

router.get('/imgdocker', (req, res, next) => {
    res.render('imgdocker')
})

router.get('/introdocker', (req, res, next) => {
    res.render('introdocker')
})

router.get('/vidacontenedor', (req, res, next) => {
    res.render('vidacontenedor')
})

//^Path para apiview
router.get('/apiview', (req, res, next) => {
    // const peliculas = Peliculas.find();
    // res.render('apiview', {peliculas})
    Peliculas.find().then(result => {
        res.status(200);
        res.render('apiview', {result})
    });
});

//!Path para GET formulario
router.get('/addform', (req, res, next) => {
    res.render('addform')
});

// método POST para agregar peliculas
router.post('/addform', (req, res, next) => {
    var route = "/apiview";
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
    res.status(200);
    res.redirect(route);
});

//!Path para GET formulario
router.get('/updateform/:id', (req, res, next) => {
    Peliculas.findOne({'_id': req.params.id}).then(result => {
        res.render('updateform', {result});
    });
});

router.put('/updateform/:id', (req, res, next) => {
    var route = "/apiview";
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
        } else {
            res.status(200)
            res.redirect(route);
        }
    });
});

router.delete('/apiview/:id', (req, res, next) => {
    var route = "/apiview";
    Peliculas.deleteOne({'_id': req.params.id}).then(result => {
        res.status(200);
        res.redirect(route);
    });
});

module.exports = router;