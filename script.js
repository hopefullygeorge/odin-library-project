const shelf = document.querySelector(".shelf");
const bookCounter = document.querySelector("#bookCounter");
const form = document.querySelector("#bookForm");
const refreshButton = document.querySelector(".refreshButton");

const myLibrary = [];

function Book(title, author, frontCoverUrl) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.frontCoverUrl = frontCoverUrl;
  // the constructor...
}

function addBookToLibrary(title, author, url) {
  // take params, create a book then store it in the array
  const newBook = new Book(title, author, url);
  myLibrary.push(newBook);
}

function displayInShelf() {
  shelf.innerHTML = "";
  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");
    console.log(bookCard);
    bookCard.style.backgroundImage = `url(${book.frontCoverUrl})`;
    shelf.appendChild(bookCard);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  const title = formData.get("book_title");
  const author = formData.get("book_author");
  const bookCover = formData.get("book_cover");

  addBookToLibrary(title, author, bookCover);
  console.table(myLibrary);
  displayInShelf();
});
