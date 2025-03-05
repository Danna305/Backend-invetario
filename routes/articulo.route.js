const express = require('express');
const router = express.Router();
const {
    getArticle,
    getArticleByID,
    createArticle,
    updateArticle,
    deleteArticle
}= require('../controllers/articulo.controller');

// Recuperar todos 
router.get('/all',getArticle)

// Recuperar por usuario
router.get('/byId/:id',getArticleByID)

// Crear 
router.post('/add',createArticle) 

// Modificar 
router.put('/update/:id',updateArticle)

// Eliminar 
router.delete('/delete/:id', deleteArticle)

module.exports = router;