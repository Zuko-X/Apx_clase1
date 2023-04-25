function main() {
  const frase = ['La', 'vida', 'es', 'como', 'una', 'caja', 'de', 'chocolates'];
  const oracionMayuscula = transformarFrase(frase);
  console.log(oracionMayuscula); // 'La Vida Es Como Una Caja De Chocolates'
}

function transformarFrase(frase) {
  const arrayDePalabras = frase.slice(0);
  const fraseMayuscula = arrayDePalabras.map((palabra) => {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  });
  const oracion = fraseMayuscula.join(" ");
  return oracion;
}

main();