const operacion = require("./operaciones");

function parsearTerminos(texto) {
    const terminos = texto.split(/(\+|\-|\*|\/)/);
    const primerTermino = parseFloat(terminos[0]);
    const segundoTermino = parseFloat(terminos[2]);
    const operacion = terminos[1];
    if (isNaN(primerTermino) || isNaN(segundoTermino) || !operacion) {
        throw new Error("Por favor ingrese dos valores numéricos y un operador válido (+, -, *, /).");
    }
    return {
        primerTermino,
        segundoTermino,
        operacion,
    };
}

function ejecutarOperacion(objetoOperacion) {
    const mapa = {
        "+": operacion.sumar,
        "-": operacion.restar,
        "*": operacion.multiplicar,
        "/": operacion.dividir,
    };
    const funcionOperacion = mapa[objetoOperacion.operacion];
    return funcionOperacion(objetoOperacion.primerTermino, objetoOperacion.segundoTermino);
}

function main() {
    const operacionParseada = parsearTerminos(process.argv[2]);
    const resultado = ejecutarOperacion(operacionParseada);
    console.log(resultado);
}

main();

