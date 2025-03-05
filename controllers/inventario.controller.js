const Inventory = require('../models/inventario.model')

// Funcion paar recuperar toda la coleccion de inventarios  
const getInventory = async(req,res) => {
    try{
        const Inventarios = await Inventory.find({});
        res.status(200).json(Inventarios);
    }catch(error){
        res.status(500).json({message: 'Ocurrio un error' + error.message})

    }

}


// Funcion para recuperar un inventario usando su identificador 
const getInventoryByID = async(req,res) => {
    try{
        const {id} = req.params;
        const Inventario = await Inventory.find({'_id':id}); 
        res.status(200).json(Inventario);
    }catch(error){
        res.status(500).json({message: 'Ocurrio un error' + error.message})

    }

}

// Funcion para crear un inventario
const createInventory = async(req,res) => {
    try{
        const Inventario = await Inventory.create(req.body);
        res.status(200).json(Inventario);
    }catch(error){
        res.status(500).json({message: 'Ocurrio un error' + error.message})

    }

}

// funcion para modificar a un inventario
const updateInventory = async(req,res) => {
    try{
        const {id} = req.params;
        const Inventario = await Inventory.findByIdAndUpdate(id, req.body); 
        if (!Inventario)
            return res.status(400).json({message: 'El inventario no existe '})
        const InventarioActualizado = await Inventory.find({'_id': id});
        res.status(200).json(InventarioActualizado);
    }catch(error){
        res.status(500).json({message: 'Ocurrio un error' + error.message})

    }

}

// funcion para eliminar a un inventario
const deleteInventory = async(req,res) => {
    try {
        const { id } = req.params;
        const Inventario = await Inventory.find({'_id': id});
        if (!Inventario)
            return res.status(400).json({ message: 'El inventario no existe' });
        const Eliminado = await Inventory.deleteOne({ '_id':id });
        res.status(200).json({ message: ' Inventario eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}


module.exports = {
    getInventory,
    getInventoryByID,
    createInventory,
    updateInventory,
    deleteInventory
};