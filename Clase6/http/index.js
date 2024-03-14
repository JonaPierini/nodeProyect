const http = require("http")
const moment = require("moment")
// En este caso el servidor es local porque estamos creando el servidor en nuestra maquina => localhost:8080

// voy al navegador y pongo localhost:8080

// req => seria pedir ; res => respuesta
const server = http.createServer((req, res) => {   
    console.log(req.url) // => aca capturo lo que me pide y la url
    if(req.url === "/"){ // si lo pedido es igual a / => la respuesta va a ser esa string
        res.end("Hola este es el pathc principal")
    }
    if(req.url === "/productos"){
        res.end("Este es el patch de productos")
    }
    if(req.url === "/hora"){
        let hora = moment().format("HH:mm")
        res.end(`Hola la hora es: ${hora}`)
    }

})

// escucho el servidor. Recibe dos argumentos. Un número (puerto)
server.listen(8080, () =>{
    console.log("Servicor http escuchando en el puerto 8080")
})