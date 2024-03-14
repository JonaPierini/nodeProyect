
const express = require('express')
const app = express()


//Para poder SUBIRLO A UN HOISTING hay que trabaja con las variables de entorno => .env (crear el archivo)
// 1. Para eso hay que hacer npm i dotenv
require('dotenv').config()
const port = process.env.PORT
// 2. Una vez hecho eso hay que modificar el package.json => dentro de "scripts" => poner el comando "start": "node app.js"
// 3. Crear .gitignore => node_modules/ y .env
// 4. Ya despues trabajar con github => git init, git add . , git commit -m

//handelbars
app.set('view engine', 'hbs');
 

//Este es el el template. La carpeta public tiene prioridad sobre el app.get('/')
//app.use(express.static('public'))


//CONTROLADOR
app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Jona',
    titulo: 'Developer'
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
