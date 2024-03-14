const response  = require("express")

//El "path" es un metodo nativo. Es decir no necisto instalar nada. Esto me sirve para pasar rutas de archivos en las respuestas del servidor
const path = require("path")

const express = require("express")
const { dirname } = require("path")

// Creo el servidor
const app = express()

//como capturar la respuesta en base a lo que pide el cliente
// Req => Pedido
// Res => Respuesta
app.get("/", (req, res) =>{
    let contador = 0
    res.send(`<h1 style='color:red'>Hola Mundo ${contador}</h1>`) // respondo
})

app.get("/productos", (req, res) =>{
    res.sendFile(path.join(__dirname+"/public/index.html")) // respondo con una ruta absoluta
})

//Para enviar objetos
app.get("/objet", (req, res) =>{
    res.json({
        mensage: "Objeto devuelto"
    }) 
})

let counter = 0;
app.get("/visitas", (req, res) =>{
     counter = counter + 1
     res.send({
             visitas: counter
    })
})

// Como subir este local host a la red => ejemplo azure, aws
const PORT = process.env.PORT || 8080  // => si estoy en la nueve usa uno sino usa el otro 
// PARA USARLO EN LA NUBE => GLITCH.COM => HAY QUE REGISTRARSE y crear un proyecto nuevo (new project) => gitch-hello-node y me muestra un entorno de desarrollo
// voy al server.js y copio mi codigo index.js. Voy al public y creo index.html y copio y pongo mi index.html
// Me va a parecer varios errores porque en el package.json del GLITCH no esta instalado el express => voy al AL package.json +ADDPACKAGE e installo el express
// Me va a aparecer en pantalla mi codigo deployado => voy a los tres puntitos y copy link para poder verlo en el navegador (me da el host)

//Creo el oido LOCALHOST
app.listen(PORT, () =>{
    console.log("Server corriendo por port " + PORT)
})