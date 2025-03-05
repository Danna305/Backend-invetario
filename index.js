const express = require('express');
const mongoose  = require('mongoose');

const articuloRoute = require('./routes/articulo.route');
const personaRoute = require('./routes/persona.route');
const ubicacionRoute = require('./routes/ubicacion.route');
const asignacionRoute = require('./routes/asignacion.route');
const inventarioRoute = require('./routes/inventario.route');

const app = express ();
app.use(express.json()) 
 
app.get('/',(req, res) => {
    res.send('Bienvenido al servidor de APIs 1.00');
})



app.use('/api/articulo',articuloRoute);
app.use('/api/persona',personaRoute);
app.use('/api/ubicacion',ubicacionRoute);
app.use('/api/asignacion',asignacionRoute);
app.use('/api/inventario',inventarioRoute);

mongoose.connect('mongodb://localhost:27017/Inventarios')
.then ( () => {
    console.log('Se establecio la conexion a base de datos exitosamnete');
    app.listen(3000, () => {
        console.log('Servidor trabajando en el puerto 3000')
    });
})
.catch ( () => console.log('Ocurrio un error en la conexion enla base de datos'))