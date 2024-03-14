// I had to create a file package.json and add the next script => { "type": "module" }
// The information (table-6) is persisten because the file was keep in the disc
import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';
import { getTable } from './helpers/multiplicar.js';
import { isNumber } from 'ionic-angular/umd/util/util.js';

let base = 'llll'
if(isNaN(base) || base == ''){
  console.log('Tiene que ser un número')
} else{
  const data = new Uint8Array(Buffer.from(getTable(base)));
  writeFile(`tabla-${base}.txt`, data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 
}


//Argumentos que vienen de consola
//console.log(process.argv)
//De una forma mas facil se puede usar con yargs => npm i yargs => (hay mucha documentación)
 
