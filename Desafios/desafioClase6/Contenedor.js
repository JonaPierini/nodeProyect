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
        try{
            const allInfo = await this.getAll()
            if(typeof allInfo == 'object'){
                if(id <= allInfo.length && id > 0) return allInfo.find(el => el.id === id)
                return `El id ${id} es invalido`
            } else {
                return `No existe el archivo ${this.txt}`
            }
        }
        catch(e){
            return e
        }
    }
    getAll = async () => {
        let info
        if(fs.existsSync(`./${this.txt}`)){
            info = await fs.promises.readFile(`./${this.txt}`, {encoding: 'utf-8'})
            info = JSON.parse(info)
        } else{
            info = `el archivo ./${this.txt} no existe`
        }
            return info
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

const prueba = new Contenedor ("./productos.txt")
 



module.exports = Contenedor