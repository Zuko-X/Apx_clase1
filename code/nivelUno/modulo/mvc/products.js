const productos = [
    { id: 1, nombre: "producto 1", stock: 27 },
    { id: 2, nombre: "producto 2", stock: 14, },
    { id: 3, nombre: "producto 3", stock: 32, },
    { id: 4, nombre: "producto 4", stock: 46, },
];

function getOne(id) {
    const objetoEncontrado = productos.find(objeto => objeto.id === id);
    if (objetoEncontrado) {
        return objetoEncontrado;
    } 
    else {
        return "El objeto con id " + id + " no fue encontrado";
    }
    
};

function getAll() {
    const objetoEncontrado = productos;
    return objetoEncontrado;
};

function getAllWith(minStock) {
    const objetosConStockMinimo = productos.filter(objeto => objeto.stock >= minStock);
    return objetosConStockMinimo;
};

module.exports = {
    getOne,
    getAll,
    getAllWith,
};