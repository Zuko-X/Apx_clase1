const animales = [
    { nombre: "perro", tipo: "mamífero", edad: "4" },
    { nombre: "gato", tipo: "mamífero", edad: "2" },
    { nombre: "loro", tipo: "ave", edad: "6" },
    { nombre: "pez", tipo: "acuático", edad: "1" },
    { nombre: "rana", tipo: "anfibio", edad: "3" }
  ];

  //For para imprimir el nombre y la edad de cada animal
  for (let i = 0; i < animales.length; i++) {
  console.log(`${animales[i].nombre} tiene ${animales[i].edad} años.`);
}

for (let animal in animales) {
  for (let propiedad in animales[animal]) {
    console.log(`${propiedad}: ${animales[animal][propiedad]}`);
  }
  console.log("------");
}

let i = 0;
while (i < animales.length) {
  console.log(animales[i].tipo);
  if (animales[i].tipo === "acuático") {
    console.log("Encontré un animal acuático! Deteniendo el loop...");
    break;
  }
  i++;
}