const express = require('express')


const app = express()

//DATA
let mensajes = []

//SERVER
const http = require('http')
const server = http.createServer(app)

//ARCHIVOS ESTATICOS
app.use(express.static('public'))

//SOCKET
const {Server} = require("socket.io")
const io = new Server(server)

//CONECTION
//ON SIRVE PARA ESCUCHAR LOS EVENTOS
io.on('connection',(socket) =>{
    socket.emit('message_back', 'Hola Bienvenido soy el Back') //el segundo parametro es lo que enviamos como back
    socket.on('message_cliente', (data) =>{
        console.log(data)
    })
    //tiro la data de mensaje 
    // socket.emit('mensajes', mensajes)
    io.sockets.emit('mensajes', mensajes) // esta se usa para que funcione al mismo tiempo todo
   
    socket.on('dataMsn', (data) => {
        console.log(data)
        mensajes.push(data)
        socket.emit('mensajes', mensajes) //envio la info actualizada
    })
})

//CREO LA CARPETA PUBLIC

//RUTA
app.get('/chat', (req, res)=>{
    res.sendFile('public/index.html', {root: '.'})
})

server.listen(8080, () =>{
    console.log('Server corriendo')
})