'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({

    // Aquí dentro el esquema del modelo
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
})

module.exports = mongoose.model('Project', ProjectSchema);
// projects --> guarda los documents en la colección
// mongoose siempre "convierte a minuscula" y "pluraliza" el nombre de la colección