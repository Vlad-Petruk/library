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

})