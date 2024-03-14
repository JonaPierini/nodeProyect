const express = require('express')
const multer = require('multer')


const app = express()

let storege = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads") // Nombre de la carpeta donde se van a guardar los archivos que van subiendo
    },
    filename:function(req, file, cb){
        cb(null, file.originalname) // Nombre del archivo que se va a guardar
    }
})

let uploads = multer({storege})

//Recibe informacion
app.get('/', (req, res) => {
    res.sendFile(__dirname+"/uploads/index.html")
})

//Enviar informacion. El argumento de uploads.single('myfile') tiene que tener el mismo nombre del archivo del index.html
app.post('/', uploads.single("myfile"), (req, res) => {
    console.log(req.file)
    let file= req.file
    if(!file){
        res.status(400).send({massage: 'Error'})
    } 
    res.send('Archivo se guardo correctamente')
})

app.listen(8080, ()=>{
    console.log('Server Ok')
})