const fs = require("fs")

// Para leer con promesas => dos parametros. Texto a leer y el encoding. Luego va como se resuelve la promesa
fs.promises.readFile("./testAsyncPromise.txt", {encoding:"utf-8"})
.then((data)=> {
    console.log(data)
})
.catch((err)=> {
    console.log(err) 
})
.finally(()=> console.log("Ejecutate igual"))

// Para leer con => Async - Await
const save = async ()  => {
    let read = await fs.promises.readFile("./testAsyncPromise.txt", {encoding:"utf-8"}) 
    // lo que sigue despues del await se comporta con asyncrono
    console.log(read)
}
save()


