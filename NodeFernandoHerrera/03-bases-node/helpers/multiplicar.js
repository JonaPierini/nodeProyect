let table = ''
export const getTable = (base) => {
    for (let index = 1; index <= 10; index++) {
        let resultado = index * base
        table += `${index} * ${base} = ${resultado}\n` 
   }
   return table
}
 
 