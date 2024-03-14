const fs = require("fs")

// Leer archivos de manera syncronica
// Dos paramentros, ubicacion del objeto a leer y objeto de tipo de escritura y su traduccion (en este caso utf-8)
let readFile = fs.readFileSync('./test.txt', {encoding: 'utf-8'})
console.log(readFile)


//Escribir archivos de manera syncronica
// Tres parametros => archivo donde quiere escribir, texto a escribir y el tipo de escritura,
// Sobre escribe lo ya escrito
let writeFile = fs.writeFileSync('./test.txt', 'Comentario Principal', {encoding: 'utf-8'})


// Para escribir sin sobre escribir
fs.appendFileSync('./test.txt', ' NUEVO COMENTARIO SIN SOBRE ESCRIBIR', {encoding: 'utf-8'})


// Si quiero escribir un array con data. Si no tengo el archivo que le paso como primer argumento, se va a crear:

let arraObjet = [
    {
        name: 'jona',
        edad: 34
    },
    {
        name: 'Juan',
        edad: 24
    }
]

let writeArray = fs.writeFileSync('./data.json', JSON.stringify(arraObjet), {encoding: 'utf-8'})

//Borrar Archivos => recibe como parametro el archivo a eliminar
        //fs.unlinkSync('test.txt')

// Manejo de errores => Por ejemplo cuando los archivos no existen
try{
    // codigo que quiero ejecutar
    console.log("Hola")
}catch(error){
    console.log(error)
}