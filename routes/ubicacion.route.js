const express = require('express');
const router = express.Router();
const {
    getLocation,
    getLocationByID,
    createLocation,
    updateLocation,
    deleteLocation
}= require('../controllers/ubicacion.controller');

// Recuperar todos 
router.get('/all',getLocation)

// Recuperar por usuario
router.get('/byId/:id',getLocationByID)

// Crear 
router.post('/add',createLocation) 

// Modificar 
router.put('/update/:id',updateLocation)

// Eliminar 
router.delete('/delete/:id', deleteLocation)

module.exports = router;