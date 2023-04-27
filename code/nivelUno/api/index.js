const { argv } = require("node:process")

const [nodeExecPath, executedFilePath, ...args] = argv
const objetos = {
    nombre: null,
    apellido: null,
    edad: null,
}

const nose = () => {
    objetos.nombre = args.shift();
    console.log(objetos.nombre)
}


function main() {
    nose();
    console.log(args)
}

main();

objetos