let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
const theIdiot = new Book("The Idiot", "Dostoevsky", 500, true);

addBookToLibrary(theHobbit);
addBookToLibrary(theIdiot);

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

// Form creates book entry

document.getElementById('book-form').addEventListener('submit', createBook);

function createBook(ev) {
  ev.preventDefault();
  let myForm = ev.target;
  let fd = new FormData(myForm);

  // create book object 
  let newBook = new Book(fd.get('title'),fd.get('author'),fd.get('page-count'), fd.get('finished-check'));
  myLibrary.push(newBook);
  console.log(newBook);

  // create book display 
  let bookDiv = document.createElement('div');
  bookDiv.classList.add('book');
  let libraryDiv = document.getElementsByClassName('library');
  libraryDiv[0].append(bookDiv);

  let title = document.createElement('p');
  title.innerHTML = newBook.title;
  title.classList.add('book-title');
  bookDiv.append(title);

  let author = document.createElement('p');
  author.innerHTML = newBook.author;
  author.classList.add('book-author');
  bookDiv.append(author);

  let pageCount = document.createElement('p');
  pageCount.innerHTML = newBook.pages + " pages";
  pageCount.classList.add('book-pages');
  bookDiv.append(pageCount);

  let completionStatus = document.createElement('p');
  if (newBook.read) {
    completionStatus.innerHTML = "Read!"
  } else {
    completionStatus.innerHTML = "Not read"
  }
  completionStatus.classList.add('book-read');
  bookDiv.append(completionStatus);
}

// make form clear, limit inputs, text wrap
