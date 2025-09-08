const shelf = document.querySelector(".shelf");
const bookCounter = document.querySelector("#bookCounter");
const form = document.querySelector("#bookForm");
const refreshButton = document.querySelector(".refreshButton");
const tableBody = document.querySelector(".tableBody");
const addButton = document.querySelector(".addBook");

const myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    frontCover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg",
    pages: 366,
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    frontCover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1598823299i/42844155.jpg",
    pages: 333,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    frontCover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
    pages: 319,
  },
  {
    title: "American Gods",
    author: "Neil Gaiman",
    frontCover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1462924585i/30165203.jpg",
    pages: 635,
  },
];

function Book(title, author, frontCover, pages) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.frontCover = frontCover;
  this.pages = pages;

  // the constructor...
}

function addBookToLibrary(title, author, url, pages) {
  // take params, create a book then store it in the array
  const newBook = new Book(title, author, url, pages);
  myLibrary.push(newBook);
}

function refreshList() {
  myLibrary.forEach((book) => {
    const row = document.createElement("tr");
    row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.pages}</td>
  `;
    tableBody.appendChild(row);
  });
}

function createBookDiv(book) {
  const newBook = document.createElement("div");
  newBook.classList.add("book");
  const cover = document.createElement("div");
  cover.classList.add("cover");
  cover.style.background = `url(${book.frontCover}) center / cover no-repeat`;

  const spine = document.createElement("div");
  spine.classList.add("spine");
  const titleP = document.createElement("p");
  titleP.innerText = book.title;
  spine.appendChild(titleP);

  newBook.appendChild(spine);
  newBook.appendChild(cover);

  return newBook;
}

function displayInShelf() {
  myLibrary.forEach((book) => {
    newBook = createBookDiv(book);
    shelf.appendChild(newBook);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  shelf.innerText = "";

  const formData = new FormData(form);

  const title = formData.get("book_title");
  const author = formData.get("book_author");
  const bookCover = formData.get("book_cover");
  const pages = formData.get("page_count");

  addBookToLibrary(title, author, bookCover, pages);
  displayInShelf();
  refreshList();
});

addButton.addEventListener("click", () => {
  form.style.display = form.style.display === "block" ? "none" : "block";
});

displayInShelf();
refreshList();
