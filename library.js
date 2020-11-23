// Create library and Book object
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

// Add Book Modal

let modal = document.getElementById("book-modal");
let btn = document.getElementById("book-btn");
let span = document.getElementsByClassName("close")[0];
let submit = document.getElementById("modal-submit");

btn.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal || event.target == submit || event.target == span) {
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

  // let btnContainer = document.createElement('div');
  // btnContainer.id = "destroy-book-btn-container";
  // bookDiv.append(btnContainer);
  let destroyBookBtn = document.createElement('a');
  destroyBookBtn.classList.add('close-book')
  bookDiv.append(destroyBookBtn);
  destroyBookBtn.onclick = destroyBook;

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

  let completionStatus = document.createElement('button');
  if (newBook.read) {
    completionStatus.innerHTML = "Read!"
    completionStatus.classList.add('read');
  } else {
    completionStatus.innerHTML = "Not read"
  }
  completionStatus.classList.add('read-check');
  bookDiv.append(completionStatus);
  completionStatus.onclick = toggleRead;
}

function toggleRead(ev) {
  console.log(ev);
  let button = ev.target;
  if (button.classList.contains('read')) {
    button.classList.remove('read');
    button.innerHTML = "Not read"
  } else {
    button.classList.add('read');
    button.innerHTML = "Read!";
  }
}

function destroyBook(ev) {
  let book = ev.target.parentNode;
  console.log(book);
  book.parentNode.removeChild(book);
}

// make form clear, limit inputs, text wrap, book truth value
