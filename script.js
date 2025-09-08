const shelf = document.querySelector(".shelf");
const bookCounter = document.querySelector("#bookCounter");
const form = document.querySelector("#bookForm");
const refreshButton = document.querySelector(".refreshButton");
const tableBody = document.querySelector(".tableBody");

const myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    frontCover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg",
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    frontCover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1598823299i/42844155.jpg",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    frontCover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
  },
];

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

function refreshList() {
  myLibrary.forEach((book) => {
    const row = document.createElement("tr");
    row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.frontCover}</td>
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

  const formData = new FormData(form);

  const title = formData.get("book_title");
  const author = formData.get("book_author");
  const bookCover = formData.get("book_cover");

  addBookToLibrary(title, author, bookCover);
  displayInShelf();
  refreshList();
});

displayInShelf();
