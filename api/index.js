//se construye el servidor
const express = require('express');

//creamos archivo de configuración
const config = require('../config.js');
const user = require('./components/user/network')

const app = express();

//se definen rutas
app.use('/api/user',user)
app.listen(config.api.port,() =>{
    console.log('Api escuchando en el puerto',config.api.port)
})