
const express = require("express")
const app = express()

const fs = require("fs")
const Contenedor = require('./Contenedor')
const ContenedorMio = new Contenedor('./productos')



app.get("/", (req, res) => {
   res.send(`<h1>NUEVA TIENDA</h1>`)
})


app.get("/productos", async (req, res) => {
     res.send(await ContenedorMio.getAll())
 })

 
 app.get("/productosRandom", async (req, res) => {
       const products = await ContenedorMio.getAll()
       let rta = await ContenedorMio.getById(Math.floor(Math.random() * ((products.length) - 1)) + 1)
       res.json(rta)
    
})

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=> {
    console.log('Server corriendo por port ' + PORT)
})






