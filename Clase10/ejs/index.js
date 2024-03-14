const express = require('express')

const app = express();


app.set('view engine', 'ejs')
app.set('views', './views')


app.get('/', (req, res)=> {
    res.render('index', {name:'Jona', administrador: true})
})


app.listen(8080, () =>{
    console.log('Server Run')
})