const form = document.querySelector("form");
const bookDisplayGrid = document.querySelector(".book-display-grid");
const status = document.querySelectorAll(".status");


form.addEventListener("submit", addBookToLibrary);




let myLibrary = [];

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
    newDiv.setAttribute("data-index-number", `${index}`)
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


    // toggle between if the user have read the book or not///

  
    changeReadStatus()
    deleteBook()
  });
}

function changeReadStatus(){
  let changeStatus = document.querySelectorAll(".change-status");
     changeStatus.forEach((changeButton) => {
      changeButton.addEventListener("click", (e) => {
        let currentStatus = e.target.parentElement.childNodes[3];
        let index = e.target.parentElement.dataset.indexNumber
        if (myLibrary[index].status === "Read"){
          myLibrary[index].status = "Notread"
          currentStatus.innerHTML = `<p>Status: ${myLibrary[index].status}</p>`;
          console.log(myLibrary)
        }else if(myLibrary[index].status === "Notread"){
          // currentStatus.innerHTML = "Status: Read";
          myLibrary[index].status = "Read"
          currentStatus.innerHTML = `<p>Status: ${myLibrary[index].status}</p>`;
          console.log(myLibrary)
        }
      });
    });
}

function deleteBook(){
  const deleteBook = document.querySelectorAll(".delete");

  deleteBook.forEach(deleteButton => {
    deleteButton.addEventListener("click", (e) => {
      let result = confirm("Are you sure you want to delete?")
      let index = e.target.parentElement.dataset.indexNumber
      
      switch(result){
        case true:
          myLibrary.splice(index, 1)
          DisplayBook()
          break;
          case false:
            DisplayBook()
            break;
            
      }
    })
  })

}

