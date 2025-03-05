const Person = require('../models/persona.models')

// Funcion paar recuperar toda la coleccion de personas 
const getPerson = async(req,res) => {
    try{
        const Personas = await Person.find({});
        res.status(200).json(Personas);
    }catch(error){
        res.status(500).json({message: 'Ocurrio un error' + error.message})

    }

}


// Funcion para recuperar un persona usando su identificador 
const getPersonByID = async(req,res) => {
    try{
        const {id} = req.params;
        const Persona = await Person.find({'_id':id}); 
        res.status(200).json(Persona);
    }catch(error){
        res.status(500).json({message: 'Ocurrio un error' + error.message})

    }

}

// Funcion para crear una persona
const createPerson = async(req,res) => {
    try{
        const Persona = await Person.create(req.body);
        res.status(200).json(Persona);
    }catch(error){
        res.status(500).json({message: 'Ocurrio un error' + error.message})

    }

}

// funcion para modificar a un persona
const updatePerson = async(req,res) => {
    try{
        const {id} = req.params;
        const Persona = await Person.findByIdAndUpdate(id, req.body); 
        if (!Persona)
            return res.status(400).json({message: 'La persona no existe '})
        const PersonaActualizado = await Person.find({'_id': id});
        res.status(200).json(PersonaActualizado);
    }catch(error){
        res.status(500).json({message: 'Ocurrio un error' + error.message})

    }

}

// funcion para eliminar a una persona
const deletePerson = async(req,res) => {
    try {
        const { id } = req.params;
        const Persona = await Person.find({'_id': id});
        if (!Persona)
            return res.status(400).json({ message: 'La persona no existe' });
        const Eliminado = await Person.deleteOne({ '_id':id });
        res.status(200).json({ message: ' Persona eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}


module.exports = {
    getPerson,
    getPersonByID,
    createPerson,
    updatePerson,
    deletePerson
};