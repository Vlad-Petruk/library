const container = document.querySelector('.main-contaner')
const books = document.querySelector('.books');





const myLibrary = [
{
    title: 'A Game of Thrones',
    author: 'George R. R. Martin',
    pages: '694',
    read: 'Yes'
},
{
    title: 'The Blade Itself',
    author: 'Joe Abercrombie',
    pages: '529',
    read: 'Yes'
}
];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
    }
}

function addBookToLibrary(){

}

myLibrary.forEach((book)=>{

    let bookCard = document.createElement('div')
    bookCard.setAttribute('class','book')
    books.append(bookCard);

    let title = document.createElement('p');
    title.setAttribute('class','info-element')
    let author = document.createElement('p');
    let pages = document.createElement('p');
    let read = document.createElement('p');
    
    bookCard.append(title);
    bookCard.append(author);
    bookCard.append(pages);
    bookCard.append(read);

    title.innerHTML = `Book title: ${book.title}`;
    author.innerHTML = `Author: ${book.author}`;
    pages.innerHTML = `Number of pages: ${book.pages}`;
    read.innerHTML = `Read status: ${book.read}`;
    console.log(title)
})