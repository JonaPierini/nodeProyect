// COMO SIEMPRE => 1) Lo primero es npm init -y 2) index.js 3) npm i express 4) const express = require("express") y todo lo demas
const express = require('express')

const app = express()

// GET => Devuele algo desde el Servidor
app.get('/', (req, res) => {
        res.send('Hola Mundo')
})

app.get('/send', (req, res) => {
    res.sendStatus(404).send('estado que yo le quiero mandar')
})

// PARAMS y QUERY => Capturan parametros de la URL
app.get('/params/:id', (req, res) => {
    //PARAMS
    let id = req.params.id
    res.send('devuelve el valor del id del parametro: ' + id)
})
 
app.get('/query', (req, res) => {
    //QUERY => son los que van con ? => ejemplo localhost>880/query?name=jona&apellido=pierini
    console.log(req.query)
    res.send('query')
})


app.listen(8080, () => {
    console.log("Server is run on port 8080")
})