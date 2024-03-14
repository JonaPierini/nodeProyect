const express = require('express')

const {Router} = express

let router = new Router()

let objetoMasctoas = [
    {
        id: 1,
        nombre: 'MascotaUno',
        apellido: 'pepe',
        edad: 5
    },
    {
        id: 2,
        nombre: 'MascotaDos',
        apellido: 'pepe',
        edad: 5
    },
    {
        id: 3,
        nombre: 'MascotaTres',
        apellido: 'pepe',
        edad: 5
    }
]
 

 
router.get('/mascotas/:id', (req, res) => {
    let id = req.params.id
    let render = objetoMasctoas.filter(elem => (elem.id == id))

    res.send({
        data: render[0]
    })
})

router.post('/mascotas', (req, res) => {
    console.log(req.body)
})

//exporto el routeo
module.exports = router