'use strict';
const mongoose = require('mongoose'),
    peliculaSchema = require('config/esquemas').peliculachema;

const models = {

    Pelicula: mongoose.model('Pelicula', peliculaSchema)

};

module.exports = models;