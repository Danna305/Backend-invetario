const mongoose = require('mongoose');
const {type} = require('express/lib/response');
const UbicacionSchema = mongoose.Schema({
    Edificio: {
        type: String,
        required: true
    },
    Nombre_area: {
        type: String,
        required: true
    },
    Nombre_departamento: {
        type: String,
        required: true
    },
    Direccion: {
        calle: {
            type: String,
            required: true
        },
        numeroExterior: {
            type: Number, 
            required: true
        },
        numeroInterior: {
            type: Number, 
            required: true
        },
        codigoPostal: {
            type: Number, 
            required: true
        },
        Ciudad: {
            type: String,
            required: true
        },
        Estado: {
            type: String,
            required: true
        },
        Pais: {
            type: String,
            required: true
        }
    },
    Fecha: {
        type: String, 
        required: true
    }
});

const Location = mongoose.model('Location', UbicacionSchema);
module.exports = Location;