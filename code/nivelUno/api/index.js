const { argv } = require("node:process")

// const [nodeExecPath, executedFilePath, ...args] = argv

// Definir los objetos con valores nulos
const objetos = {
    nombre: null,
    apellido: null,
    edad: null,
}

const takeArguments = () => {
    // Analizar los argumentos
    for (let i = 0; i < args.length; i += 2) {
        // Si el argumento no tiene un valor, salir del loop
        if (i + 1 >= args.length) {
            break;
        }
        // Obtener el nombre y el valor del argumento
        const name = args[i].replace(/^--/, "");
        const value = args[i + 1];
        
        // Asignar el valor al objeto
        switch (name) {
            case "nombre":
                objetos.nombre = value;
                break;
            case "apellido":
                objetos.apellido = value;
                break;
            case "edad":
                objetos.edad = value;
                break;
            default:
                console.error(`El argumento "${name}" no es válido`);
                process.exit(1);
        }
    }
}

// Obtener los argumentos de la línea de comandos
let args = process.argv.slice(2);

function main() {
    takeArguments();
    console.log(objetos);
}

main();
