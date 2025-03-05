const mongoose = require('mongoose');
const {type} = require('express/lib/response');
const InventarioSchema = mongoose.Schema({
    Nombre:{
        type: String,
        required: true
    },
    Fecha_destinada:{
        type: Array,
        required: true
    },
    Nombre_responsable: {
        type: String,
        required: true
    },
    Fecha_registro: {
        type: String,
        required: true
    },
    Estado: {
        type: String,
        required: true
    }
})

const Inventory = mongoose.model('Inventory', InventarioSchema)
module.exports = Inventory;