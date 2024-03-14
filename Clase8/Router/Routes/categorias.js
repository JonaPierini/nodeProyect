const express = require('express')

const {Router} = express

let router = new Router()


router.get('/categoriasUno', (req, res) => {
    res.send('Categorias Uno')
})

router.post('/categoriasDos', (req, res) => {
    console.log(req.body)
})

//exporto el routeo
module.exports = router