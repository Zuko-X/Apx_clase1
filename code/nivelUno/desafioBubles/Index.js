const arr = [
  [3, 567, 23],
  [23, 54, 23],
  [27, 457, 67],
  [34, 675, 12],
];
const newArr = [];
let counter = 0;
for (let i = 0; i < arr.length; i++){
    for (const index in arr[i]){
        const numero = arr[i][index];
        newArr[counter] = numero;
        counter++; 
    }
}
console.log(newArr);