// An Array to store Books in the Library
let myLibrary = [];

// Library Constructor to get Book Details
function Books(title,author,pages,status) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.status = status
}

// Adds new book to the Library Array
function addBookToLibrary(title,author,pages,status) {
  const books = new Books(title,author,pages,status);
  myLibrary.push(books);
  displayTheBooks();
}

// Display Form
const addBook = document.getElementById("add-book-button");
const addBookBox = document.getElementById("add-book");
const addBookForm = document.getElementById("add-book-form");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");

addBook.addEventListener("click",() => {
  addBookBox.style.display = "block";
});

submit.addEventListener("click",() => {
  getFormdata();
  addBookForm.reset();
  addBookBox.style.display = "none";
});

reset.addEventListener("click",() => {
  addBookForm.reset();
})


// Get the Input data
function getFormdata() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let status = document.getElementById("read-status").value;

  addBookToLibrary(title,author,pages,status);

}
/*
addBookToLibrary("The Hobbits","J.R.R Tolkien",
"295","Not read yet");

addBookToLibrary("The Hobbits","J.R.R Tolkien",
"295","read");
*/
/*
const theHobbit = new Books("The Hobbits","J.R.R Tolkien",
                            "295","Not read yet");
console.log(theHobbit.info());
*/

function displayTheBooks() {


  // remove all cards before adding new card to display
  const display = document.querySelector("section");
  const removeDiv = document.querySelectorAll(".card");

  for(let i = 0; i < removeDiv.length; i++) {
    removeDiv[i].remove();
  }
  
  // Create cards and Display them
  myLibrary.forEach(myLibrarys => {
    const card = document.createElement("div");
    card.classList.add("card");
    display.appendChild(card);
    
    for (const key in myLibrarys) {
        const para = document.createElement("p");
        para.textContent = (`${key} : ${myLibrarys[key]}`);
        card.appendChild(para);
    }
    // Remove button
    const remove_btn = document.createElement("button");
    remove_btn.textContent = "remove";
    remove_btn.style.padding = "10px";
    remove_btn.classList.add("remove_btn");
    card.appendChild(remove_btn);
  });

}