const express = require('express')

const app = express();

let arr = [
    {
        name: 'Producto Uno',
        price: 100
    },
    {
        name: 'Producto Dos',
        price: 200
    },
]

app.set('view engine', 'pug')
app.set('views', './views')


app.get('/', (req, res) =>{
    res.render("index")
})

app.get('/productos', (req, res) =>{
    res.render("productos", {data:arr})
})

app.listen(8080, () =>{
    console.log('Server Run')
})