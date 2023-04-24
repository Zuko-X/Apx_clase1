const precios = {
  zapatillas: 3200,
  lampara: 1500,
  mesa: 4500,
  taza: 400,
};

const productoSeleccionado = "lampara";
switch(productoSeleccionado) {
  case "zapatillas":
    console.log("El precio es: $" + precios.zapatillas);
    break;  
  case "lampara" :
    console.log("El precio es: $" + precios.lampara);
    break;
  case "mesa":
    console.log("El precio es: $" + precios.mesa);
    break;
  case "taza":
    console.log("El precio es: $" + precios.taza);
    break;
  default: 
    console.log("No hay productos seleccionados")
}