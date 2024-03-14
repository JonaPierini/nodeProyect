const express = require("express");


const app = express()

const mascotas = require('./Rutas/mascotas')

app.use('/mascotas', mascotas) //productos/productosDos


app.listen(8080, () => {
    console.log('Puerto Ejercicio corriendo')
})
