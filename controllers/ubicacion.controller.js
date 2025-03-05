const Location = require('../models/ubicacion.model')

// Funcion paar recuperar toda la coleccion de ubicaciones 
const getLocation = async(req,res) => {
    try{
        const Ubicaciones = await Location.find({});
        res.status(200).json(Ubicaciones);
    }catch(error){
        res.status(500).json({message: 'Ocurrio un error' + error.message})

    }

}


// Funcion para recuperar una ubicacion  usando su identificador 
const getLocationByID = async(req,res) => {
    try{
        const {id} = req.params;
        const Ubicacion = await Location.find({'_id':id}); 
        res.status(200).json(Ubicacion);
    }catch(error){
        res.status(500).json({message: 'Ocurrio un error' + error.message})

    }

}

// Funcion para crear una ubicacion
const createLocation = async(req,res) => {
    try{
        const Ubicacion = await Location.create(req.body);
        res.status(200).json(Ubicacion);
    }catch(error){
        res.status(500).json({message: 'Ocurrio un error' + error.message})

    }

}

// funcion para modificar a una ubicacion
const updateLocation = async(req,res) => {
    try{
        const {id} = req.params;
        const Ubicacion = await Location.findByIdAndUpdate(id, req.body); 
        if (!Ubicacion)
            return res.status(400).json({message: 'La ubicacion no existe '})
        const UbicacionActualizada = await Location.find({'_id': id});
        res.status(200).json(UbicacionActualizada);
    }catch(error){
        res.status(500).json({message: 'Ocurrio un error' + error.message})

    }

}

// funcion para eliminar a una ubicacion
const deleteLocation = async(req,res) => {
    try {
        const { id } = req.params;
        const Ubicacion = await Location.find({'_id': id});
        if (!Ubicacion)
            return res.status(400).json({ message: 'La ubicacion no existe' });
        const Eliminado = await Location.deleteOne({ '_id':id });
        res.status(200).json({ message: ' Ubicacion  eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}


module.exports = {
    getLocation,
    getLocationByID,
    createLocation,
    updateLocation,
    deleteLocation
};