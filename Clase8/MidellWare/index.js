// Es una funcion que se ejecuta antes de la ruta
// Aca no funca porque no instale npm init, exprres, etx

//MIDD DE APLICACION
app.use(function(req, res, next){
    console.log('Time: ', Date.now())
    //primero se ejecuta el console y con el next() se ejecuta lo que sigue, que seria el codigo de abajo
    next()
})
app.get('/', (res, res)=> {
    res.send('Hola')
})

//MIDD ROUTES => Son una funcion personalizada respecto la ruta
function middRoutes(req, res, next){
    req.nuevaReq = 'Hola soy una nueva propiedad de req'
    next()
}

// Se ejecuta la pagina principal y despues el middRoutes

app.get('/', middRoutes, (req, res) => {
    res.send(req.nuevaReq)
})