const express = require('express')
const cors = require('cors');
const fetch = require("node-fetch");
const app = express()
const port = 3000

// const productos = [
//   {
//     id: 1,
//     nombre: 'Manzan',
//     descripcion: 'Verde'
//   },
//   {
//     id: 2,
//     nombre: 'Naranja',
//     descripcion: 'Jugosa'
//   } 
// ]

const corsOptions = {
  origin: 'http://127.0.0.1:5173' // Replace with your client's URL
};

app.use(cors(corsOptions));

// app.get('/', (req, res) => {
//   res.json(productos); // Send JSON directly
// });

app.get('/', async (req, res)=> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    res.json(data)
  } catch (error) {
    console.log(error)
  }
})

app.get('/nosotros', (req, res) => {
  res.send('Nosotros')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})