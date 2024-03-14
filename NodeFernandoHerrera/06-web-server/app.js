const express = require('express')
const app = express()
const port = 8080

//Servir contenido estatico. La carpeta public tiene prioridad sobre el get /
app.use(express.static('public'))


// Req lo que me estan solicitando
// Res lo que mi servidor responde al cliente
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/nosotros', (req, res) => {
    res.sendFile(__dirname + '/public/nosotros.html')
  })

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
