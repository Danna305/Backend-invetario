const Assignment  = require('../models/asignacion.models')

// Funcion paar recuperar toda la coleccion de asignaciones  
const getAssignment = async(req,res) => {
    try{
        const Asignaciones = await Assignment.find({});
        res.status(200).json(Asignaciones);
    }catch(error){
        res.status(500).json({message: 'Ocurrio un error' + error.message})

    }

}


// Funcion para recuperar una asignacion usando su identificador 
const getAssignmentByID = async(req,res) => {
    try{
        const {id} = req.params;
        const Asignacion = await Assignment.find({'_id':id}); 
        res.status(200).json(Asignacion);
    }catch(error){
        res.status(500).json({message: 'Ocurrio un error' + error.message})

    }

}

// Funcion para crear una asignacion
const createAssignment = async(req,res) => {
    try{
        const Asignacion = await Assignment.create(req.body);
        res.status(200).json(Asignacion);
    }catch(error){
        res.status(500).json({message: 'Ocurrio un error' + error.message})

    }

}

// funcion para modificar a una asignacion
const updateAssignment = async(req,res) => {
    try{
        const {id} = req.params;
        const Asignacion = await Assignment.findByIdAndUpdate(id, req.body); 
        if (!Asignacion)
            return res.status(400).json({message: 'La asignación no existe '})
        const AsignacionActualizado = await Assignment.find({'_id': id});
        res.status(200).json(AsignacionActualizado);
    }catch(error){
        res.status(500).json({message: 'Ocurrio un error' + error.message})

    }

}

// funcion para eliminar a una asignacion
const deleteAssignment = async(req,res) => {
    try {
        const { id } = req.params;
        const Asignacion = await Assignment.find({'_id': id});
        if (!Asignacion)
            return res.status(400).json({ message: 'El asignación no existe' });
        const Eliminado = await Assignment.deleteOne({ '_id':id });
        res.status(200).json({ message: ' Asignación eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}


module.exports = {
    getAssignment,
    getAssignmentByID,
    createAssignment,
    updateAssignment,
    deleteAssignment
}