const express = require('express')
const { engine } = require("express-handlebars")


const app = express();

let arr = [
    {
        name: 'Producto Uno',
        price: 100
    },
    {
        name: 'Producto Dos',
        price: 200
    },
]

app.set('views', './views')
app.set('view engine', 'hbs')

app.use(express.json());
app.use(express.urlencoded({extended: true}))

//Configuracion de la plantilla
 app.engine(
     'hbs',
     engine({
         extname: 'hbs',
         layoutsDir: __dirname + '/views/layouts', //Layout por defecto
         defaultLayout: 'index',
         partialsDir: __dirname + '/views/partials'
     })
 );

 //Rutas
 app.get('/', (req, res)=> {
    res.render('main')
 })
 app.get('/productos', (req, res)=> {
    res.render('productos', {layout: 'home', data:arr})
 })

 app.post('/', (req, res) => {
    // capturo informacion que me envian
    req.body
    console.log(req.body)
    let newProduct = {
        id: newId = (min, max) => Math.floor(Math.random() * (max - min)) + min,
        name: req.body.name,
    }

    arr.push(newProduct)
    res.redirect('/productos')
})


app.listen(8080, () =>{
    console.log('Server Run')
})