const fs = require("fs")

class Contenedor {
    constructor(txt){
        this.txt = txt
    }
    save = (object)=> {
       try{
           let isJson = this.getAll()
           if(typeof isJson == 'object'){
               object.id = isJson.lengt > 0 ? isJson[isJson.lengt-1].id + 1 : 1
               isJson.push(object)
               fs.writeFileSync(this.txt, JSON.stringify(isJson))
               return object.id
           }
           else{
               object.id = 1
               fs.writeFileSync(this.txt, JSON.stringify([object]))
               return object.id
           }
       }
       catch(e){
           console.log(e)
       }
    }
    getByid = (id) => {
         try{
            const isJson = this.getAll()
            if(typeof isJson == "object"){
                if(typeof id === "number" && id <= isJson.lengt && id >=1){
                    return isJson.filter(elem => elem.id === id)
                }
                return "ID INVALIDO"
            }
         }
         catch(err){
             return err
         }
         
    }
    getAll = () => {
        if(fs.existsSync(this.txt)){
            let info = fs.readFileSync(this.txt, {encoding: "utf-8"})
            return JSON.parse(info)
        }
    }
    daleteById = (id) =>{
        const isJson = this.getAll()
        if(typeof isJson == "object"){
            if(typeof id === 'number' && id <= isJSON.length && id >= 1 ){
                const newInfo = isJson.filter(elem => elem.id != id)
                if(newInfo.lengt < isJson.lengt){
                    fs.writeFileSync( this.txt, JSON.stringify(newInfo))
                    return `El Id ${id} fue eliminado`
                }
                return `El Id ${id} ya fue eliminado`
            }
        else{
            return `El Id ${id} es inválido`
        }
        }
        else{
            return isJson
        }
    }
    delateAll = () =>{
        fs.writeFileSync(this.txt, JSON.stringify([]))
        return `Todos los objetos del archivo '${this.txt}' fueron eliminados`
    }
}