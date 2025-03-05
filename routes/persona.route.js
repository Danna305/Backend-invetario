const express = require('express');
const router = express.Router();
const {
    getPerson,
    getPersonByID,
    createPerson,
    updatePerson,
    deletePerson
}= require('../controllers/persona.controller');

// Recuperar todos 
router.get('/all',getPerson)

// Recuperar por usuario
router.get('/byId/:id',getPersonByID)

// Crear 
router.post('/add',createPerson) 

// Modificar 
router.put('/update/:id',updatePerson)

// Eliminar 
router.delete('/delete/:id', deletePerson)

module.exports = router;