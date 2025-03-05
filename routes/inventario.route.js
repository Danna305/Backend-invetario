const express = require('express');
const router = express.Router();
const {
    getInventory,
    getInventoryByID,
    createInventory,
    updateInventory,
    deleteInventory
}= require('../controllers/inventario.controller');

// Recuperar todos 
router.get('/all',getInventory)

// Recuperar por usuario
router.get('/byId/:id',getInventoryByID)

// Crear 
router.post('/add',createInventory) 

// Modificar 
router.put('/update/:id',updateInventory)

// Eliminar 
router.delete('/delete/:id', deleteInventory)

module.exports = router;