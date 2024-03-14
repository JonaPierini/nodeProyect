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



app.listen(8080, () =>{
    console.log('Server Run')
})