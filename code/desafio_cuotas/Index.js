    const compuUno = {
  id: "1",
  title: "Notebook Asus",
  marca: "asus",
  estado: "nuevo",
  sellerId: 1,
  precio: 58999,
  precioCuotas: 0,
  stock: 33,
  vendidos: 400,
  cuotas: 6,
  aceptaTarjeta: true,
  envioGratis: true,
  puntos: 0,
  };
  
  const compuDos = {
    id: "2",
    title: "Notebook Lenovo",
    marca: "lenovo",
    estado: "usado",
    sellerId: 2,
    precio: 99999,
    precioCuotas: 0,
    stock: 450,
    vendidos: 500,
    aceptaTarjeta: true,
    cuotas: 12,
    envioGratis: false,
    puntos: 0,
  };

compuUno.precioCuotas = compuUno.precio / compuUno.cuotas
compuDos.precioCuotas = compuDos.precio / compuDos.cuotas

let precioCuotas = compuUno.precioCuotas < compuDos.precioCuotas ? compuUno.puntos ++ : compuDos.puntos ++; //Compara el precio de las cuotas entre compuUno y compuDos, al menor le suma 1 punto
let envioGratisUno = compuUno.envioGratis == true ? compuUno.puntos++ : compuUno.puntos; //Si la compuUno tiene envio gratis le suma 1 punto
let envioGratisDos = compuDos.envioGratis == true ? compuDos.puntos++ : compuDos.puntos; //Si la compuDos tiene envio gratis le suma 1 punto
let estadoUno = compuUno.estado == "nuevo" ? compuUno.puntos++: compuUno.puntos; //Si la compuUno es nueva le suma 1 punto
let estadoDos = compuDos.estado == "nuevo" ? compuDos.puntos++: compuDos.puntos; //Si la compuDos es nueva le suma 1 punto 
let ventas = compuUno.vendidos > compuDos.vendidos ? compuUno.puntos++ : compuDos.puntos++; //Compara las ventas, el mas vendido suma 1 punto
//este if está todo mal 
if (compuUno.marca == "lenovo" || "asus") {
    compuUno.puntos++;
}
else if (compuDos.marca == "lenovo" || "asus") {
    compuDos.puntos++;
}
else if (compuUno.marca == "dell" || "samsung") {
    compuUno.puntos+2;
}
else if (compuDos.marca == "dell" || "samsung") {
    compuDos.puntos+2;
}
else if (compuDos.marca == "apple"){
    compuDos.puntos+3;
}
else if (compuUno.marca == "apple"){
    compuUno.puntos+3;
}


console.log("Tiene " + compuUno.puntos + " puntos.");
console.log("Tiene " + compuDos.puntos + " puntos.");