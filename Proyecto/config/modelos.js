'use strict';
const mongoose = require('mongoose'),
    peliculaSchema = require('/config/esquemas').peliculaSchema;

const models = {

    Pelicula: mongoose.model('Pelicula', peliculaSchema)

};

module.exports = models;