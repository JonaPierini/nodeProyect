const http = require('node:http');



const personas = [
    {
        id: 1, 
        nombre: 'Jona',
        apellido: 'Pierini'
    },
    {
        id: 2, 
        nombre: 'Emma',
        apellido: 'Pierini'
    },
    {
        id: 3, 
        nombre: 'Oscar',
        apellido: 'Pierini'
    },
]

// Create a local server to receive data from
// Req lo que me estan solicitando
// Res lo que mi servidor responde al cliente
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: personas,
  }));
});

server.listen(8080);