// Aca como ya esta instalado, en el index.js, el npm init y demas, no hace falta hacerlo.
const express = require('express')

// Esto es para el ruteo
const {Router} = express
let router = new Router()

// array vacio
let arrayMascotas = []

router.get('/productosUno', (req, res) => {
    res.send({
        data:arrayMascotas
    })
})

//Aca es conveniente usar PostMan
router.post('/create', (req, res) => {
    // toda esta info de objeto deberia estar en el POSTMAN
     console.log(req.body)
     let {nombre, raza, edad} = req.body
     let mascotaNueva = {
         nombre: nombre,
         raza: raza,
         edad: edad
     }
     arrayMascotas.push(mascotaNueva)
     res.send('Mascota guardada')
})

//exporto el routeo y puedo usarlo en index.js
module.exports = router