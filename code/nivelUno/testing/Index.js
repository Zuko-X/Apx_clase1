// Escribir acá la función cuentaPalabras
function cuentaPalabras(texto){
    // Remover los espacios en blanco al inicio y final del texto
    texto = texto.trim();

    // Dividir el texto en palabras utilizando el espacio en blanco como separador
    const palabras = texto.split(' ');

    // Retornar el número de palabras
    return palabras.length;
}

// no modificar esta funcion
function testCuentaPalabras() {
  const texto =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus non, eligendi harum adipisci eos provident quaerat eveniet illo placeat distinctio omnis pariatur maiores et voluptates perferendis laborum quam facere.";
  const resultado = cuentaPalabras(texto);
  if (resultado.cantidadDePalabras == 30 && resultado.palabrasConA == 3) {
    console.log("testCuentaPalabras passed");
  } else {
    throw "testCuentaPalabras falló";
  }
}

function main() {
  testCuentaPalabras();
}

main();