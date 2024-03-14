
// Esta linea abre un canal de websocket
const socket = io()
//Escucha eventos => lo mismo que esta en la io.on('connection')
socket.on('message_back', (data)=> {
    console.log(data) // consoleo la data del back
    socket.emit('message_cliente', 'Gracias por la conexion') // Emito respuesta
})

socket.on('mensajes', (data)=>{
    console.log(data) // consoleo la data del back
    render(data) //nombre de la funcion
    socket.emit('mensaje', 'Gracias por la conexion') // Emito respuesta en el front
})

//consumo la data del array mensajes
const render = (data) => {
    let html = data.map((x) =>{
        return `<p>${x.nombre} - ${x.msn}</p>`
    }).join(' ')
    document.getElementById('caja').innerHTML = html
}

const addInfo = () => {
 
    let dataOb = {
        nombre: document.getElementById('nb').value, 
        msn: document.getElementById('msn').value,
    };

    socket.emit('dataMsn', dataOb)
    console.log(dataOb)
    document.getElementById('msn').value = ''
    return false
};