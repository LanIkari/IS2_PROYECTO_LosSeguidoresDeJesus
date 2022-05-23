'use strict';
const mongoose = require('mongoose'),
    peliculaSchema = require('esquemas').peliculachema;

const models = {

    Pelicula: mongoose.model('Pelicula', peliculaSchema)

};

module.exports = models;