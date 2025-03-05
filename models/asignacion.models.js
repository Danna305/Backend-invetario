const mongoose = require('mongoose');
const {type} = require('express/lib/response');
const AsignacionSchema = mongoose.Schema({
    Identificador_persona:{
        type: Number,
        required: true
    },
    Identificador_articulo:{
        type: Number,
        required: true
    },
    Observacion_general: {
        type: String,
        required: true
    },
    Estado: {
        type: String,
        required: true
    },
    Fecha_Inicio: {
        type: String,
        required: true
    },
    Fecha_Fin: {
        type: String,
        required: true
    },
    Identificacion_Usuario: {
        type: String,
        required: true
    }
})

const Assignment = mongoose.model('Assignment', AsignacionSchema)
module.exports = Assignment;