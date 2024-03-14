// Todo lo mismo (npm init -y / npm i express / index.js) y vemos para guardar archivos estaticos

const express = require("express")


const app = express()

//Usamos el use para los archivos estaticos // public es el nombre de la carpeta donde estan los archivos estaticos
app.use("/static", express.static('public'))

//static/hola
// Con sendFile le envio el archivo estatico que quiero
app.get("/hola", (req, res)=>{
    res.sendFile('/public/index.html')
})

app.get('/img', (req, res) => {
    res.sendFile(__dirname + '/public/img.png') // se le pone el __dirname pq tiene que buscar en la raiz de la compu a la img
})

app.listen(8080,()=>{
    console.log('Server Corriendo / FileStatic')
})