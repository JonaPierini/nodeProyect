const fs = require("fs")
let object = [{
        name: 'Jona',
        edad: 34,
        id: 1
}]


class Contenedor {
    constructor(txt){
        this.txt = txt
    }
    save = (object)=> {
        if(object){
            fs.writeFileSync('./desafioClase4.txt', JSON.stringify(object), {encoding: 'utf-8'})
        }
        else{
            fs.appendFileSync('./desafioClase4', JSON.stringify(object), {encoding: 'utf-8'})
        }
    }
    getById = (id) => {
         object.filter((elem) => {
            if(elem.id === id) {
                return object
            }
            else {
                return "El objeto con ese ID no existe"
            }
            })
    }
    getAll = () => {
        if('./desafioClase4'){
            fs.readFile('./desafioClase4', {encoding: 'utf-8'}, (err, data) => {
                if(err){
                    return 'Error en la lectura'
                }
                console.log(JSON.parse(data))
        })
        }
        
    }
    deleteByid = (id) => {
        if(id === []){
            fs.unlinkSync('./desafioClase4.txt')
        } else{
            return "Id no encontrado"
        }
    }  
    deleteAll = () => {
        fs.unlinkSync("./desafioClase4.txt")
    }
}

const prueba = new Contenedor ("./desafioClase4.txt")
 

