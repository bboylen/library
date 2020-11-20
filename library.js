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
// if modal open -> listen to add button -> if validates -> read info from form
document.getElementById('book-form').addEventListener('submit', handleForm);

function handleForm(ev) {
  ev.preventDefault();
  let myForm = ev.target;
  let fd = new FormData(myForm);

  // for (let key of fd.keys()) {
  //   console.log(key, fd.get(key));
  // }

  // create book object 

  // create div 
  let bookDiv = document.createElement('div');
  bookDiv.classList.add('book');
  let libraryDiv = document.getElementsByClassName('library');
  libraryDiv[0].append(bookDiv);
  let name = document.createElement('p');
  name.innerHTML = fd.get('name');
  let author = document.createElement('p');
  let pageCount = document.createElement('p');
  let completion = document.createElement('p');
  console.log(name);
  bookDiv.append(name);
}

