const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]


let mostrarNombres = productos.map(elem=> elem.nombre)
console.log(mostrarNombres.join(", "))

let precioTotal = productos.reduce(
    (previousValue, currentValue) => previousValue + currentValue.precio,
    0
  );

console.log(precioTotal)

let promedio = precioTotal / productos.length
console.log(promedio)