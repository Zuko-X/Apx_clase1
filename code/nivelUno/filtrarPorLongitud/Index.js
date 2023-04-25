const filterByLenght = (n) => {
  const arr = ["Hola", "adios", "bienvenido", "chau"];
  const newArr = arr.filter ((str) => str.length >= n)
  console.log(newArr);
}
filterByLenght(5);