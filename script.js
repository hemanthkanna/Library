/* LIBRARY ARRAY AND BOOKS TO ADD IN THE ARRAY  */

// An array to store Book in Library
let myLibrary = [];

// Library Constructor to get Book Details
function Books(title,author,pages,status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

// Add new book to the Library Array
function addBookToLibrary(title,author,pages,status) {
  const books = new Books(title,author,pages,status);
  myLibrary.push(books);
  displayTheBooks();
}


/* FORM ACTIONS & UI */ 
const addBookButton = document.getElementById("add-book-button");
const addBookBox = document.getElementById("add-book-box"); 
const closeButton = document.getElementById("close-form-button");
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");
const addBookForm = document.getElementById("add-book-form");
const readStatus = document.getElementById("read-status");

function openForm() {
  addBookBox.style.display = "block";
  addBookButton.style.display = "none";
  
}

function closeForm(params) {
  addBookBox.style.display = "none";
  addBookButton.style.display = "flex";
}

addBookButton.addEventListener("click", openForm);
closeButton.addEventListener("click", closeForm);

resetButton.addEventListener("click",()=> {
  addBookForm.reset();
});

submitButton.addEventListener("click",()=> {
  getFormDetails();
  addBookForm.reset();
  closeForm();
});


// Function to get the Input data
function getFormDetails() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let status = document.getElementById("read-status").value;

  if (readStatus.checked) {
    status = readStatus.value;
  } else {
    status = "not read";
  }
  if(!(title == "" || author == "" || pages == "")) {
    addBookToLibrary(title,author,pages,status);
  }
}


/* DISPLAY BOOKS AS CARDS */
const displaySection = document.querySelector("section");

// function to display books
function displayTheBooks() {

  // remove all card before display
  const removeCards = document.querySelectorAll(".cards");
  for (let i = 0; i < removeCards.length; i++) {
    removeCards[i].remove();
  }

  // create card to display
  let index = 0;
  myLibrary.forEach(libraryBooks => {
    const card = document.createElement("div");
    card.classList.add("cards");
    displaySection.appendChild(card);

    // Create Remove Button 
    const removeButton = document.createElement("button");
    removeButton.classList.add("removeButtons");
    removeButton.innerHTML = '<i class="fa-solid fa-trash"></i>' + 'REMOVE';
    removeButton.dataset.linkedArray = index;

    removeButton.addEventListener("click", removeBookFromLibrary);

    // Function to Remove Book from library
    function removeBookFromLibrary() {
      let bookToRemove = removeButton.dataset.linkedArray;
      myLibrary.splice(parseInt(bookToRemove),1);
      displayTheBooks();
    }

    // Create Toggle Read Status Button
    const toggleReadButton = document.createElement("button");
    toggleReadButton.classList.add("toggleButton");
    toggleReadButton.innerHTML = '<i class="fa-solid fa-arrows-rotate fa-xl"></i>';
    toggleReadButton.dataset.linkedArray = index;

    toggleReadButton.addEventListener("click",toggleReadStatus);

    // Function to toggle read
    function toggleReadStatus() {
      let bookToToggle = toggleReadButton.dataset.linkedArray;
      Books.prototype = Object.create(Books.prototype);
      const toggleBook = new Books();

      if ((myLibrary[parseInt(bookToToggle)].status) == "read") {
        toggleBook.status = "not read";
        myLibrary[parseInt(bookToToggle)].status = toggleBook.status;
      } else if ((myLibrary[parseInt(bookToToggle)].status) == "not read") {
        toggleBook.status = "read";
        myLibrary[parseInt(bookToToggle)].status = toggleBook.status;
      }
      displayTheBooks();
    }

    for(const key in libraryBooks) {
        const content = document.createElement('p');
        content.textContent = (`${key} : ${libraryBooks[key]}`);
        card.appendChild(content);
        card.appendChild(toggleReadButton);
        card.appendChild(removeButton);
    }  
    index++;
  })

}