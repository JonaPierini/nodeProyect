
// Esta linea abre un canal de websocket
const socket = io()
//Escucha eventos => lo mismo que esta en la io.on('connection')
socket.on('message_back', (data)=> {
    console.log(data) // consoleo la data del back
    socket.emit('message_cliente', 'Gracias por la conexion') // Emito respuesta
})

socket.on('productos', (data)=>{
    console.log(data) // consoleo la data del back
    render(data) //nombre de la funcion
    socket.emit('productos', 'Gracias por la conexion') // Emito respuesta en el front
})

//consumo la data del array  
const render = (data) => {
    let html = data.map((x) =>{
        return `<p>${x.id} - ${x.name}</p>`
    }).join(' ')
    document.getElementById('caja').innerHTML = html
}

const addInfo = () => {
    
    let dataOb = {
        id: document.getElementById('nb').value, 
        name: document.getElementById('msn').value,
    };

    socket.emit('dataMsn', dataOb)
    console.log(dataOb)
    document.getElementById('msn').value = ''
    return false
};