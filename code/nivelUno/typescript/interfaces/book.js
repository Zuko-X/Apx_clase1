;
function printBookInfo(book) {
    console.log("Title: ".concat(book.title));
    console.log("Author: ".concat(book.author));
    console.log("Pages: ".concat(book.pages));
    console.log("ISBN: ".concat(book.isbn));
}
// Crea aquí el objeto que cumpla con la interfaz Book
var book = {
    // Completa aquí los valores de las propiedades
    title: "Juramentada",
    author: "Brandon Sanderson",
    pages: 1258,
    isbn: "9788417347000",
};
function main() {
    printBookInfo(book);
}
main();
