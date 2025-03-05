const express = require('express');
const router = express.Router();
const {
    getAssignment,
    getAssignmentByID,
    createAssignment,
    updateAssignment,
    deleteAssignment
}= require('../controllers/asignacion.controller');

// Recuperar todos 
router.get('/all',getAssignment)

// Recuperar por usuario
router.get('/byId/:id',getAssignmentByID)

// Crear 
router.post('/add',createAssignment) 

// Modificar 
router.put('/update/:id',updateAssignment)

// Eliminar 
router.delete('/delete/:id', deleteAssignment)

module.exports = router;