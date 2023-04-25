const productos = [
    {
        id: 1,
        nombre: "producto 1",
        stock: 27,
    },
    {
        id: 2,
        nombre: "producto 2",
        stock: 14,
    },
    {
        id: 3,
        nombre: "producto 3",
        stock: 32,
    },
    {
        id: 4,
        nombre: "producto 4",
        stock: 46,
    },
];

export function getOne(id) {
    const objetoEncontrado = productos.find(objeto => objeto.id === id);
    objetoEncontrado ? console.log(objetoEncontrado) : console.log('El objeto con id ' + id + ' no fue encontrado');
    return objetoEncontrado
};

function getAll() {
    
};

function getAllWith(minStock) {
    
};

getOne(5);