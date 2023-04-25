const producto = {
  id: 1,
  nombre: "Insulina",
  descripcion: "Insulina Glargina. Solucion inyectable. Via subcutanea.",
  precio: 4000,
  stock: 350,
};

for (let muestra in producto) {
  console.log(muestra, producto[muestra]);
}
