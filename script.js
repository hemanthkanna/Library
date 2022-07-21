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

const addBookButton = document.getElementById("add-book-button");
const addBookBox = document.getElementById("add-book-box");
const addBookForm = document.getElementById("add-book-form");
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");

// Display Form
addBookButton.addEventListener("click",() => {
  addBookBox.style.display = "block";
});

// Submit Form
submitButton.addEventListener("click",() => {
  getFormdata();
  addBookForm.reset();
  addBookBox.style.display = "none";
});

// Reset Form
resetButton.addEventListener("click",() => {
  addBookForm.reset();
})

// Function to get the Input data
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

// Function to display Book details as a Card
function displayTheBooks() {
  // remove all cards before adding new card to display
  const display = document.querySelector("section");
  const removeDiv = document.querySelectorAll(".card");

  for(let i = 0; i < removeDiv.length; i++) {
    removeDiv[i].remove();
  }
  
  // Create cards and Display them
  let index = 0;
  myLibrary.forEach(myLibrarys => {
    const card = document.createElement("div");
    card.classList.add("card");
    display.appendChild(card);

        //create Remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "remove";
        removeButton.classList.add("remove_btn");

        //add dataset to remove Button
        removeButton.dataset.linkedArray = index;

        removeButton.addEventListener("click",removeBookFromLibrary);

        // Function to Remove Book from Library
        function removeBookFromLibrary() {
          let bookToRemove = removeButton.dataset.linkedArray;
          myLibrary.splice(parseInt(bookToRemove), 1);
          card.remove(); 
          displayTheBooks();
        }
    
        // Display card with Book Details
    for (const key in myLibrarys) {
        const para = document.createElement("p");
        para.style.padding = "10px";
        para.textContent = (`${key} : ${myLibrarys[key]}`);
        card.appendChild(para);
        card.appendChild(removeButton);
    }
    index++;

  });
}