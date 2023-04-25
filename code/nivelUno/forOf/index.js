const computadoras = [
  { nombre: "Asus", sistema_operativo: "Windows" },
  { nombre: "Macbook", sistema_operativo: "macOS" },
  { nombre: "Dell", sistema_operativo: "Windows" },
  { nombre: "Lenovo", sistema_operativo: "Linux" },
  { nombre: "HP", sistema_operativo: "Windows" }
];

for (const compu of computadoras) {
  let sistem = compu.sistema_operativo === "Windows" ? console.log(compu.nombre): void 0;
}