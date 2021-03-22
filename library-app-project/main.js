const form = document.querySelector("form");
const bookDisplayGrid = document.querySelector(".book-display-grid");
const status = document.querySelectorAll(".status");

const changeStatus = document.querySelectorAll(".change-status");
const deleteBook = document.querySelectorAll(".delete");

form.addEventListener("submit", addBookToLibrary);
changeStatus.forEach((changeButton) => {
  changeButton.addEventListener("click", (e) => {
    let currentStatus = e.target.parentElement.childNodes[7];
    switch (currentStatus.textContent) {
      case "Status: Read":
        currentStatus.textContent = "Status: Not Read";
        break;
      case "Status: Not Read":
        currentStatus.textContent = "Status: Read";
        break;
    }
  });
});

deleteBook.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(myLibrary);
  });
});

let myLibrary = [
  { author: "mike", title: "flex", totalPages: 100, status: "read" },
];

function Book(author, title, totalPages, status) {
  this.author = author;
  this.title = title;
  this.totalPages = totalPages;
  this.status = status;
}

function addBookToLibrary(e) {
  e.preventDefault();
  let array = [];

  for (let i = 0; i < e.target.length; i++) {
    if (e.target[i].type != "submit") array.push(e.target[i].value);
  }
  myLibrary.push(new Book(...array));

  DisplayBook();
}





function DisplayBook() {
  bookDisplayGrid.textContent = "";

  myLibrary.forEach((book, index) => {
    // Create book card layout

    let newDiv = document.createElement("div");
    newDiv.className = "book-card";
    let bookTitle = document.createElement("h3");
    let bookAuthor = document.createElement("p");
    let bookPages = document.createElement("p");
    let status = document.createElement("p");

    status.className = "status";
    let ToggleStatusButton = document.createElement("button");
    ToggleStatusButton.className = "change-status";
    let deleteButton = document.createElement("button");
    deleteButton.className = "delete";

    // end

    // create Text Nodes

    let bookAuthorValue = document.createTextNode(`by ${book.author}`);
    let bookTitleValue = document.createTextNode(`${book.title}`);
    let BooktotalPagesValue = document.createTextNode(
      `${book.totalPages} pages`
    );
    let bookStatusValue = document.createTextNode(`Status: ${book.status}`);

    let changeStatusText = document.createTextNode("Change Status");
    let deleteButtonText = document.createTextNode("Delete");


    /// End

    // Append to  div created

    ToggleStatusButton.appendChild(changeStatusText);
    deleteButton.appendChild(deleteButtonText);

    bookTitle.appendChild(bookTitleValue);
    bookAuthor.appendChild(bookAuthorValue);
    bookPages.appendChild(BooktotalPagesValue);
    status.appendChild(bookStatusValue);

    newDiv.appendChild(bookTitle);
    newDiv.appendChild(bookAuthor);
    newDiv.appendChild(bookPages);
    newDiv.appendChild(status);
    newDiv.appendChild(ToggleStatusButton);
    newDiv.appendChild(deleteButton);

    /// End

    // Append to Parent Element
    bookDisplayGrid.appendChild(newDiv);
  });
}

function createNewBookCard() {}
