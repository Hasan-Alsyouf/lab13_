
let books = [];
let bookid = 0;
module.exports = class Book {
    constructor(id, title, ISBN, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.ISBN = ISBN
        this.publishedDate = publishedDate;
        this.author = author;
    }

    static getAllBooks(){
        return books;
    }

    static getBookById(id){
        let book = books.find(b=>b.id==id);
        if(book)
            return book;
        else
            return new Error("Invalid Book ID");
    }

    updateBookById(){
        let index = books.findIndex(b=>b.id==this.id);
        if(index>-1){
            books[index] = this;
            return this;
        }else{
            return new Error("Invalid Book ID");
        }
    }  
    static deleteBookById(id){
        if(books.filter(b=>b.id==id).length==0)
            return new Error("Invalid Book ID");
        else
            books = books.filter(b=>b.id!=id);
    }
    createBook(){
        this.id = bookid++;
        books.push(this);
        return this;
    }

   
}