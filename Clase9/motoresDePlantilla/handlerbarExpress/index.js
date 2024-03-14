const express = require('express')

//MOSTRAR ARCHIVOS CON HANDLERBAR => npm install express-handlebars
//PERMITE CREAR COMPONENTES

const { engine } = require("express-handlebars")

const app = express();

        // MUESTRA ARCHIVOS HTML STATICOS
// app.use(express.static('public'))
// app.get('/', (req, res)=>{
//     res.sendFile()
// })


app.engine('hbs', engine({ //los archivos que voy a tener (index.hbs)
    extname:'.hbs',
    defaultLayaout:'main.hbs', //Carpeta Layouts y adentro su archivo mains.hbs. Main embuelve toda la aplicacion
    partialsDir:__dirname + 'views/partials' //Tengo que tener ambas carpetas
}))  

//Aca se usa RENDER
app.get('/', (req, res)=> {
    res.render('index', {titulo: 'Hola mundo con HBS'}) //aca se le pasa logica
})


app.set('view engine', 'hbs') //Para utilizar un montor de plantilla
app.set('views', './views') //Para guardar las vistas hdp que voy a usar. Hay que crear la carpeta VIEWS y el archivo index.hbs

app.listen(8080, () => {
    console.log('Server Ok')
})