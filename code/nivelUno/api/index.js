const { argv } = require("node:process")
let args = process.argv.slice(2);
const objetos = {
    nombre: null,
    apellido: null,
    edad: null,
}

const takeArguments = () => {
    for (let i = 0; i < args.length; i += 2) {
        if (i + 1 >= args.length) {
            break;
        }
        const name = args[i].replace(/^--/, "");
        const value = args[i + 1];
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
function main() {
    takeArguments();
    console.log(objetos);
}

main();
