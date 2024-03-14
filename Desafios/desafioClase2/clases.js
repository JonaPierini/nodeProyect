class Usuario  {
     constructor(nombre = String, apellido = String, libros = [], masctotas = []){
         this.nombre = nombre;
         this.apellido = apellido;
         this.libros = libros;
         this.mascotas = masctotas;
     }
     getFullName = () => (`Hola mi nombre es ${this.nombre} y mi apellido es ${this.apellido}`)
     addMasctota = (nombreMascota) => {
         this.mascotas.push(nombreMascota)
         console.log(nombreMascota)
     }   
     countMascotas = () => {
        let cantidadMascotas = this.mascotas.length
        console.log(cantidadMascotas)
     }
     addBook = (nombre, autor) => {
        this.libros.push({nombre, autor})
        console.log(this.libros)
     }
     getBookName = () => {
         this.libros.map((elem => console.log(elem.nombre)))
     }
 }

 let jona = new Usuario("jona", "pierini")

console.log(jona.getFullName())

jona.addMasctota('pancho')
jona.addMasctota('felipe')
jona.addMasctota('oto')

jona.countMascotas()

jona.addBook('libro1', 'escritoPorAutor1')
jona.addBook('libro2', 'escritoPorAutor2')


jona.getBookName()