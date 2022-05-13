let myLibrary = [];
const addBook = document.querySelector('.addBook')
const body = document.body
const cardList = document.querySelector('.main')
// const createCard = document.createElement('div');
// const createTitle = document.createElement('div');
// const current = document.querySelector('.cardRemove');


function book(title, author, pageCount, read) {
  this.title = title
  this.author = author
  this.pageCount = pageCount
  this.read = read
    // this.report = function() {     <-- fix this w/ prototype
    //   console.log(title, author)
    // }
}
  
function addBookToLibrary() {
  let a = prompt('What\'s the Book Title?');
  let b = prompt('What\'s the Author\'s name?');
  let c = prompt('What\'s the Book\'s Page Count?');
  let d = prompt('Have you read this book?');
  return new book(a, b, c, d);
}

function displayBooks() {
  const current = document.querySelectorAll('.cardRemove');
  current?.forEach(a => {
    a.remove();
  });
  myLibrary.forEach((a) => {
    const createCard = document.createElement('div');
    const createTitle = document.createElement('div');
    const title = document.createTextNode(a.title);
    createCard.classList.add('card');
    createCard.classList.add('cardRemove');
    createTitle.classList.add('title');
    createTitle.appendChild(title);
    createCard.appendChild(createTitle);
    cardList.appendChild(createCard);
  })
}

function promptBook() {
  myLibrary.push(addBookToLibrary());
  displayBooks();
}

function modal() {
  // const createModal = document.createElement('div');
  // const createTitle = document.createElement('div');
  // const title = document.createTextNode("Add a Book");
  // createModal.classList.add('card');
  // createModal.classList.add('cardRemove');
  // createTitle.classList.add('title');
  // createTitle.appendChild(title);
  // createModal.appendChild(createTitle);
  // createModal.
  // body.appendChild(createModal);
}



addBook.addEventListener('click', promptBook)



// myLibrary.push(addBookToLibrary())


// const book1 = new book("Back to Basics", "Sir Author", 69420, "unread")
// book1.report()