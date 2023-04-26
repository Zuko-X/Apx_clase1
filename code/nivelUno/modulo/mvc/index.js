const { getOne, getAll, getAllWith } = require("./products")

function main() {
    objeto = getOne(2);
    console.log(objeto);
    const todosLosObjetos = getAll();
    console.log(todosLosObjetos);
    const objetosConStockMinimo = getAllWith(20);
    console.log(objetosConStockMinimo);
};

main();