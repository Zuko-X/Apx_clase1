  interface Book {
    title: string;
    author: string;
    pages: number;
    isbn: string;
  };

  function printBookInfo(book: Book) {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Pages: ${book.pages}`);
    console.log(`ISBN: ${book.isbn}`);
  }
  
  // Crea aquí el objeto que cumpla con la interfaz Book
  const book: Book = {
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