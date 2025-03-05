const Article = require('../models/articulo.model')

// Funcion paar recuperar toda la coleccion de articulos  
const getArticle = async(req,res) => {
    try{
        const Articulos = await Article.find({});
        res.status(200).json(Articulos);
    }catch(error){
        res.status(500).json({message: 'Ocurrio un error' + error.message})

    }

}


// Funcion para recuperar un articulo usando su identificador 
const getArticleByID = async(req,res) => {
    try{
        const {id} = req.params;
        const Articulo = await Article.find({'_id':id}); 
        res.status(200).json(Articulo);
    }catch(error){
        res.status(500).json({message: 'Ocurrio un error' + error.message})

    }

}

// Funcion para crear un articulo
const createArticle = async(req,res) => {
    try{
        const Articulo = await Article.create(req.body);
        res.status(200).json(Articulo);
    }catch(error){
        res.status(500).json({message: 'Ocurrio un error' + error.message})

    }

}

// funcion para modificar a un articulo
const updateArticle = async(req,res) => {
    try{
        const {id} = req.params;
        const Articulo = await Article.findByIdAndUpdate(id, req.body); 
        if (!Articulo)
            return res.status(400).json({message: 'El articulo no existe '})
        const ArticuloActualizado = await Article.find({'_id': id});
        res.status(200).json(ArticuloActualizado);
    }catch(error){
        res.status(500).json({message: 'Ocurrio un error' + error.message})

    }

}

// funcion para eliminar a un articulo
const deleteArticle = async(req,res) => {
    try {
        const { id } = req.params;
        const Articulo = await Article.find({'_id': id});
        if (!Articulo)
            return res.status(400).json({ message: 'El articulo no existe' });
        const Eliminado = await Article.deleteOne({ '_id':id });
        res.status(200).json({ message: ' Articulo eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}


module.exports = {
    getArticle,
    getArticleByID,
    createArticle,
    updateArticle,
    deleteArticle
};