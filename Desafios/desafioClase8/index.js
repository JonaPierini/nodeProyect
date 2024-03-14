const express = require('express')

const app = express()

const produc = [
    {
        id:1,
        title: 'Producto 1',
        price: 100,
        thumbnail: 'Logo Producto'
    },
    {
        id: 2,
        title: 'Producto 2',
        price: 200,
        thumbnail: 'Logo Producto'
    },
    {
        id: 3,
        title: 'Producto 3',
        price: 300,
        thumbnail: 'Logo Producto'
    }
]

// GET

app.get('/', (req, res) => {
    res.send('Hola')
})

app.get('/api/productos', (req, res) => {
    res.send(produc)
})


app.get('/api/productos/:id', (req, res) => {
    let id = req.params.id
    let returnId = produc.filter(elem => elem.id == id)
    res.send({
        data: returnId[0]
    })
})

// POST

app.post('/', (req, res) => {
    // capturo informacion que me envian
    req.body
    console.log(req.body)
    let newProduct = {
        id: newId = (min, max) => Math.floor(Math.random() * (max - min)) + min,
        name: req.body.name,
    }

    produc.push(newProduct)
    res.send({
        message: 'Nuevo producto guardado',
        data: newProduct,
    })
})

// PUT

send = function(req, res) { 
    req.send(res.locals.content.newProduct);
};

app.put('/api/products/:id', (res,req) => {
    res.send('this is an update');
}, send);


// DELETE

app.delete('/api/productos/:id', (res, req)=> {
    let id = req.params.id
    let delt = produc.find(elem => {
        if(elem.id == id){
            produc.pop()
        }

    })
    res.send(delt)
})

// LISTEN

app.listen(8080, () => {
    console.log('Server run')
})