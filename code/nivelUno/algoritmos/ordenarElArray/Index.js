let arrayOriginal = new Array(40);
const largoArray = arrayOriginal.length;
    
const ordenarElArray = (arrayOriginal) => {
    for (let i = 0; i < largoArray; i++) {
        for (let n = 0; n < largoArray; n++) {
            if (arrayOriginal[n] > arrayOriginal[n + 1]) {
                const temp = arrayOriginal[n];
                arrayOriginal[n] = arrayOriginal[n + 1];
                arrayOriginal[n + 1] = temp;
            }
        }
    }
    return arrayOriginal;
};

const randomNumber = (min, max)  => {
    for (let i = 0; i < largoArray; i++) {
        arrayOriginal[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return arrayOriginal;
};

const main = () => {
    const arrayOrdenado = ordenarElArray(randomNumber(1, 100));
    console.log(arrayOrdenado);
  };  

main();
