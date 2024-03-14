// npm init -y // npm i express // y todo lo normal

const express = require('express')

// me traigo el archivo de rutas => Routes es el nombre de la carpeta (se usa este nombre de carpetas para guardar las rutas) y dentro de ahi esta productos y categorias
const productosRoute = require('./Routes/productos')
const categoriasRoute = require('./Routes/categorias')
const app = express()

// Esto es lo normal
app.get("/", (req, res) => {
    res.send("ROUTER")
})
//los objetos que llegan del POSTMAN hay que pasarlos a JSON sino llega undefined
app.use(express.json())

// El use es una funcion que sirve para entrar a la ruta. Lo uso para poder usar la ruta de productos (es la constante que esta arriba) y de categorias
app.use('/productos', productosRoute) //productos/productosDos

app.use('/categorias', categoriasRoute) //categorias/categoriasUno

app.listen(8080, () => {
    console.log("Server corriendo")
})