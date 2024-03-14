
const express = require('express')

const traerArray = require('./arr')

const app = express()

//GET
app.get('/', (req, res) => {
    res.send({
        message: 'Informacion enviada',
        data: traerArray,
    })
})

app.get('/productos', (req, res) => {
    res.send('Hola')
})

app.get('/:id', (req, res) => {
   let id = req.params.id
   let nuevoArray = traerArray.filter((elem) => elem.id === Number(id))
   res.send({
       message: 'Todo piola',
       data: nuevoArray[0]
   })
})

// Para que con el metodo POST (AGREGAR DATOS) puede leer informacion que viene del POSTMAN y que viene por JSON
// En postman tengo que pegar la url del HOST. Despues en POST voy a BODY y seleccion JSON. Ahi pongo el nuevo usuario
// Abro una nueva PESTANA y utilizo get con el mismo url y lo envio => AHI ME DEBERIA MOSTRAR LOS USUARIOS Y EL NUEVO USUARIO

app.use(express.json())

app.post('/', (req, res) => {
    // capturo informacion que me envian
    req.body
    console.log(req.body)
    let userNew = {
        id: Math.random(),
        name: req.body.name,
    }

    traerArray.push(userNew)
    res.send({
        message: 'Usuario Guardado',
        data: userNew,
    })
})

// PUT => Actualiza datos

// DELETE => Elimia datos de un archivo o base de datos

app.listen(8080, () => {
    console.log('Server run')
})