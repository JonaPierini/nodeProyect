function obtenerMayor(x, y){
    if(typeof x === 'number' && typeof y === 'number'){
        if(x > y){
            return x
        }
        if(y > x){
            return y
        }
        if(x == y){
            return x
        }
    }
    else{
        return 'Es un string'
    }
         
    
}

console.log(obtenerMayor('hola', 'pap'))

// CALLBACK
const suma = (a, b) =>{
    return a + b
}

const resta = (a, b) => {
    return a - b
}

const calculador = (num1, num2, cb) => {
    return cb(num1, num2)
}


console.log(calculador(5, 3, resta))

