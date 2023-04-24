const moduloBuscador = require("./buscador.js");

function main() {
    const resultadoDeBusqueda = moduloBuscador.buscaPelis();
    console.log(resultadoDeBusqueda);    
}

main();