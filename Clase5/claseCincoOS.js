//OS => Sistema Operativo => Son modulos nativos que no hace falta instalarlo. A diferencia de algunas dependencia que se instalan por npm
const os = require("os")

//Como esta conformada la pc
os.cpus()
//Retorna la arquitectura de la pc
os.arch()
//Devuelve el nombre de la pc
os.hostname()
//Devuelve el total de la memoria
os.totalmem()
//Devuelve la pataforma que trabaja el equipo => wind32/64
os.platform()

//Para crear un proyuecto node npm init. Despues te pregunta el nombre que va a tener el proyecto. Despuest te sale la version. 
//La descripcion (puede o no completarse). Entry point (generalemtne es index.js). Los demas son opcionales y se genera un json.
//Despues conformi. A partir de ahi se crea un archivo json package.json
// Despues hay que crear el fichero (index.js)
// A partir de ahi podemos usar las dependencias NPM
// Despues instalo las dependencias (ejemplo npm install colors) y en el package.json se crean la referencia a la dependencia que instale
// Tmb automaticamente se crean los node_modules
// Tmb se crean los package-lock-json => informacion completa de los paquetes que uso
// en el INDEX.JS puedo usar ese paquete que instale => const colors = require("colors") - console.log("Hello".green)


// VERSIONADO => refiere a las actualizaciones de los paquetes que estoy usando con NPM. Son tres numeros, separados entre sí por un punto y
// simbolos. Los simbolos indica la forma en que se va a actualizar el paquete => ~ * ^ (Cada uno de esos simbolos significa como se va a actualizar)
// Los tres puntos significa entos => Del primero al tercero
//Major Realease => Son actualizaciones grandes, significativas.
//Minor Release: Actualizaciones pequeñas
//Patches => Arreglos o parches 

