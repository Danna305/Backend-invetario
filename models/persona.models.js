const mongoose = require('mongoose');
const {type} = require('express/lib/response');
const PersonaSchema = mongoose.Schema({
    Nombre_completo:{
        Nombres:{
            type:String,
            required: true
        },
        Apellido_paterno:{
            type: String,
            required: true
        },
        Apellido_materno:{
            type: String,
            required: true
        }     
    },
    Puesto:{
        type: String,
        required: true
    },
    Medios_contacto: {
        Correo:{
            type: String,
            required: true
        },
        Telefono:{
            type: Number,
            required: true
        }
    },
    Fecha: {
        type: String,
        required: true
    }
})

const Person = mongoose.model('Person', PersonaSchema)
module.exports = Person;