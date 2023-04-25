//Busqueda binaria
let listaDeNumeros = [1, 3, 6, 98, 105, 209, 987, 1024];

function busquedaBinaria(numeros, busqueda){
  let desde = 0;
  let ultimaPosicion = numeros.length - 1;
  let hasta = ultimaPosicion;

  while(desde <= hasta) {
    let laMitad = Math.floor((desde + hasta) / 2);
    let numeroDelMedio = numeros[laMitad];
    if(numeroDelMedio == busqueda){
      return laMitad;
    }
    if(numeroDelMedio > busqueda){
      hasta = laMitad - 1;
    } else {
      desde = laMitad + 1;
    }
  }
  return -1;
}

const donde = busquedaBinaria(listaDeNumeros, 987);

console.log("encontrado en la posición " + donde, listaDeNumeros[donde]);