const container = document.querySelector(".main-container");
const books = document.querySelector(".books");

const newBookBtn = document.querySelector(".add-book");
const bookDial = document.getElementById("bookDial");
const confirmBtn = bookDial.querySelector("#confirmBtn");
const inputTitle = bookDial.querySelector("#book-title");
const inputAuthor = bookDial.querySelector("#book-author");
const inputPages = bookDial.querySelector("#book-pages");
const inputRead = bookDial.querySelector("#book-read");

let userTitle = "";
let userAuthor = "";
let userPages = "";
let userRead = "";

const myLibrary = [
  {
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    pages: "694",
    read: "Yes",
  },
  {
    title: "The Blade Itself",
    author: "Joe Abercrombie",
    pages: "529",
    read: "Yes",
  },
];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  info() {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
  }
}

newBookBtn.addEventListener("click", () => {
  inputTitle.value = "";
  inputAuthor.value = "";
  inputPages.value = "";
  inputRead.value = "";
  bookDial.showModal();
});

inputTitle.addEventListener("input", (e) => {
  userTitle = inputTitle.value;
});

inputAuthor.addEventListener("input", (e) => {
  userAuthor = inputAuthor.value;
});

inputPages.addEventListener("input", (e) => {
  userPages = inputPages.value;
});

inputRead.addEventListener("input", (e) => {
    console.log(inputRead.value)
  userRead = inputRead.value;
});

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();

    // Check if all required fields are filled
    if (userTitle && userAuthor && userPages && userRead) {
        const book = new Book(userTitle, userAuthor, userPages, userRead);
        myLibrary.push(book);
        displayLibrary();
        bookDial.close();
    } else {
        alert("Please fill in all required fields.");
    }
});

function removeBook(index) {
  myLibrary.splice(index, 1);
}

function toggleReadStatus(index) {
  myLibrary[index].hasRead = !myLibrary[index].hasRead;
  displayLibrary();
}

function displayLibrary() {
  while (books.firstChild) {
    books.removeChild(books.firstChild);
  }

  myLibrary.forEach((book, index) => {
    let bookCard = document.createElement("div");
    bookCard.setAttribute("class", "book");
    books.append(bookCard);

    let title = document.createElement("p");
    title.setAttribute("class", "info-element");
    let author = document.createElement("p");
    let pages = document.createElement("p");
    let read = document.createElement("p");
    let removeBtn = document.createElement("button");
    let togleReadBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    togleReadBtn.textContent = "Toggle Read status";

    bookCard.append(title);
    bookCard.append(author);
    bookCard.append(pages);
    bookCard.append(read);
    bookCard.append(removeBtn);
    bookCard.append(togleReadBtn);

    title.innerHTML = `Book title: "${book.title}"`;
    author.innerHTML = `Author: ${book.author}`;
    pages.innerHTML = `Number of pages: ${book.pages}`;
    read.innerHTML = `Read status: ${book.hasRead ? "Yes" : "No"}`;
    removeBtn.addEventListener("click", () => {
      removeBook(`${index}`);
      displayLibrary();
    });
    togleReadBtn.addEventListener("click", () => {
      toggleReadStatus(`${index}`);
    });
  });
}

displayLibrary();
