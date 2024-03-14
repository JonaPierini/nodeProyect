// Modo Asyncrono con Callback
const fs = require('fs')

// Para leer archivos asyncronicos. Tres parametros: Texto a leer, encoding y callback con dos parametros
fs.readFile('./testAsync.txt', {encoding: 'utf-8'}, (err, data) => {
        if(err){
            return 'Error en la lectura'
        }
        console.log(data)
})

// Para escribir. Lo sobre escribe al texto que habia en el archivo. Cuatro parametros.
fs.writeFile('./testAsync.txt', 'Contenido Nuevo', {encoding: 'utf-8'}, (err) =>{
    if(err){
        return 'Error encontrado'
    } else{
        console.log("Escrityo correctamente")
    }
})

// Para escribir sin sobre escribir => 
// fs.appendFile

// Para borrar
// fs.unlink("./testAync.txt", (err)=> {
//     if(err){
//         return "Error al borrar"
//     } else{
//         console.log("Archivo borrado")
//     }
// })