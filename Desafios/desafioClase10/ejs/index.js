const express = require('express')

const app = express();

//Creo la plantailla
app.set('view engine', 'ejs')
app.set('views', './views')

//Para formatiar la info del form
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//Array productos
let arr = [{
    id:1,
    name: 'ProdUno',
    price: 200
},
{
    id:2,
    name: 'ProdDos',
    price: 200
},
{
    id:3,
    name: 'ProdTres',
    price: 300
}]

//Obtener Productos
app.get('/getAll', (req, res)=> {
    res.render('index', {data:arr}) //Me devuelv el index.ejs
})

//Formulario
app.get('/form', (req,res)=>{
    res.render('form')
})

//Crear productos => Guardar info
app.post('/creatPr', (req, res) =>{
    console.log(req.body)
    let obj = req.body
    arr.push(obj)
    res.render('exitos')
})

app.listen(8080, () =>{
    console.log('Server Run')
})