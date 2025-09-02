const bookshelfDiv = document.querySelector("#bookshelfDiv");

const bookCountP = document.querySelector("#bookCountP");
const hiddenCheckbox = document.querySelector("#hiddenCheckbox");

const addButton = document.querySelector("#addButton");
const sortButton = document.querySelector("#addButton");

const myLibrary = [];

function Book(title, author) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  // the constructor...
}

function addBookToLibrary(title, author) {
  // take params, create a book then store it in the array
  const newBook = new Book(title, author);
  myLibrary.push(newBook);
}

bookCountP.innerText = myLibrary.length;

// on press of addButton -> launch form.
