let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    let readString;
    if (read) {
      readString = "not read";
    } else {
      readString = "already read";
    }
    console.log(`${title} by ${author}, ${pages} pages, ${readString}`);
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
const theIdiot = new Book("The Idiot", "Dostoevsky", 500, true);

addBookToLibrary(theHobbit);
addBookToLibrary(theIdiot);

for (let book of myLibrary) {
  book.info();
}

// Add Book Modal

let modal = document.getElementById("book-modal");
let btn = document.getElementById("book-btn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
