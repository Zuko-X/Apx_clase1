function main(){

    
    const objetos = [
        {texto: "Hola", numero: 1},   
    {texto: "caja", numero: 2},
    {texto: "lampara", numero: 3},
    {texto: "ventilador", numero: 4},
    {texto: "Insulina", numero: 5},
    {texto: "computadora", numero: 6},
    {texto: "programa", numero: 7},
    {texto: "collar", numero: 8},
    {texto: "almohada", numero: 9},
    {texto: "velador", numero: 10},
    {texto: "sabana", numero: 11},
    {texto: "mouse", numero: 12},
    {texto: "teclado", numero: 13},
    {texto: "mundo", numero: 14},
    {texto: "planeta", numero: 15},
    {texto: "oceano", numero: 16},
    {texto: "mar", numero: 17},
    {texto: "tierra", numero: 18},
    {texto: "aire", numero: 19},
    {texto: "fuego", numero: 20},  
];

    //Llamar a la funcion que filtra los objetos pares 
    const resultado = filtrarObjetosPares(objetos);

    //Mostrar el resultado por consola 
    console.log(resultado);


    function filtrarObjetosPares(array) {
        const resultado = [];

        //Recorrer el array de objetos
        for (let i; i < array.length; i++){
            const objeto = array[i];
        
            //Verificar si el numero del objeto es par
            if (objetos.numero % 2 === 0){
                resultado.push (objeto);
            }
        }
    }
        return resultado;
}

function testFiltrarObjetosPares() {
    const array1 = [{num: 1}, {num: 2}, {num: 3}, {num: 4}];
    const array2 = [{num: 1}, {num: 3}, {num: 5}, {num: 7}];
    
    // Prueba 1
    const resultado1 = filtrarObjetosPares(array1);
    const esperado1 = [{num: 2}, {num: 4}];
    console.assert(JSON.stringify(resultado1) === JSON.stringify(esperado1), `Error en la Prueba 1. Se esperaba ${JSON.stringify(esperado1)} pero se obtuvo ${JSON.stringify(resultado1)}`);
    
    // Prueba 2
    const resultado2 = filtrarObjetosPares(array2);
    const esperado2 = [];
    console.assert(JSON.stringify(resultado2) === JSON.stringify(esperado2), `Error en la Prueba 2. Se esperaba ${JSON.stringify(esperado2)} pero se obtuvo ${JSON.stringify(resultado2)}`);
};