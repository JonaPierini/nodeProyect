import { useState, useEffect } from 'react'
import './App.css'


function App() {
   const [produc, setProduc] = useState([])
   const getData = async () => {
       const fetchData = await fetch("http://localhost:3000")
       const respuesta = await fetchData.json()
       setProduc(respuesta)
   }

  useEffect(() => {
       getData() 
  }, [])
  

  console.log(produc)

  return (
    <div className="App">
       {produc.map((elem) =>
       <div key={elem.id}>
          <span>Titulo N° {elem.id}: {elem.title}</span>
       </div> )}
    </div>
  )
}

export default App
