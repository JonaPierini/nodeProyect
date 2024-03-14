

 
function mostrarLista (lista = []){
    if(lista.length === 0){
        console.log('Lista Vacia')
        console.log(lista)
    } else{
        console.log('Retorna los Elementos')
        console.log(lista.length)
        console.log(lista)
    }
}


mostrarLista([2,3, 5, 6])



 function Multiplicador (saludo) {
 return function (nombre) {
        return (`${saludo}, mi nombre es ${nombre}`)
      }
  }  

console.log(Multiplicador("Hola")("Jona"))


