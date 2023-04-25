const compuUno = {
  id: "1",
  title: "Notebook Asus",
  marca: "samsung",
  estado: "nuevo",
  sellerId: 1,
  precio: 58999,
  stock: 33,
  vendidos: 400,
  cuotas: 6,
  aceptaTarjeta: true,
  envioGratis: true,
};
const compuDos = {
    id: "2",
    title: "Notebook Lenovo",
    marca: "apple",
    estado: "nuevo",
    sellerId: 2,
    precio: 99999,
    stock: 450,
    vendidos: 500,
    aceptaTarjeta: true,
    cuotas: 12,
    envioGratis: false,
};

// Array objetos anidado
//   const computadoras = [
//     {
//         id: "1",
//         title: "Notebook Asus",
//         marca: "asus",
//         estado: "nuevo",
//         sellerId: 1,
//         precio: 58999,
//         stock: 33,
//         vendidos: 400,
//         cuotas: 6,
//         aceptaTarjeta: true,
//         envioGratis: true,
//     },
//     {
//         id: "2",
//         title: "Notebook Lenovo",
//         marca: "apple",
//         estado: "usado",
//         sellerId: 2,
//         precio: 99999,
//         stock: 450,
//         vendidos: 500,
//         aceptaTarjeta: true,
//         cuotas: 12,
//         envioGratis: false,
//     }
//   ]
// const [xMin, xMax, yMin, yMax] = [-2, 2, -1.5, 1.5];

let puntosCompuUno = 0;
let puntosCompuDos = 0;

const precioCuotasUno = compuUno.precio / compuUno.cuotas
const precioCuotasDos = compuDos.precio / compuDos.cuotas
// Precio Cuotas
const precioCuotas = compuUno.precioCuotas < compuDos.precioCuotas ? puntosCompuUno ++ : puntosCompuDos ++; //Compara el precio de las cuotas entre compuUno y compuDos, al menor le suma 1 punto

// Envio Gratis
const envioGratisUno = compuUno.envioGratis == true ? puntosCompuUno++ : puntosCompuUno; //Si la compuUno tiene envio gratis le suma 1 punto
const envioGratisDos = compuDos.envioGratis == true ? puntosCompuDos++ : puntosCompuDos; //Si la compuDos tiene envio gratis le suma 1 punto

// Estado
const estadoUno = compuUno.estado === "nuevo" ? puntosCompuUno = puntosCompuUno + 2: puntosCompuUno; //Si la compuUno es nueva le suma 1 punto
const estadoDos = compuDos.estado === "nuevo" ? puntosCompuDos = puntosCompuDos + 2: puntosCompuDos; //Si la compuDos es nueva le suma 1 punto 

// Ventas
const ventas = compuUno.vendidos > compuDos.vendidos ? puntosCompuUno++ : puntosCompuDos++; //Compara las ventas, el mas vendido suma 1 punto

// Marca
switch(compuUno.marca){
    case "asus":
        puntosCompuUno ++;
    break;
    case "lenovo":
        puntosCompuUno ++;
    break;
    case "dell":
        puntosCompuUno += 2;
    break;
    case "samsung":
        puntosCompuUno += 2; 
    break;
    case "apple":
        puntosCompuUno += 3;
    break;
    default: puntosCompuUno;
}
switch(compuDos.marca){
    case "asus":
        puntosCompuDos ++;
    break;
    case "lenovo":
        puntosCompuDos ++;
    break;
    case "dell":
        puntosCompuDos += 2;
    break;
    case "samsung": 
        puntosCompuDos += 2;
    break;
    case "apple":
        puntosCompuDos += 3;
    break;
    default: puntosCompuDos;
}

console.log("La compu 1 tiene " + puntosCompuUno + " puntos.");
console.log("La compu 2 tiene " + puntosCompuDos + " puntos.");

if (puntosCompuUno > puntosCompuDos) {
    console.log("La computadora 1 es la ganadora con " + puntosCompuUno + " puntos");
}
else if (puntosCompuUno < puntosCompuDos) {
    console.log("La computadora 2 es la ganadora con " + puntosCompuDos + " puntos")
}
else {
    console.log("Es un empate")
}

