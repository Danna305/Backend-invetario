const mongoose = require('mongoose');
const {type} = require('express/lib/response');
const ArticuloSchema = mongoose.Schema({
    Tipo:{
        type: String,
        required: true
    },
    Nombre:{
        type: String,
        required: true
    },
    Descripcion: {
        type: String,
        required: true
    },
    Estado: {
        type: String,
        required: true
    },
    Ubicacion: {
        type: String,
        required: true
    },
    Fecha: {
        type: String,
        required: true
    }
})

const Article = mongoose.model('Article', ArticuloSchema)
module.exports = Article;