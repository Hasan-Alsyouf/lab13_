const Book = require('../models/book');



exports.addBook = (req,res,next)=>{
	
    const {title, ISBN, publishedDate, author} = req.body;
    console.log(req.body);
    let book = new Book(null,title, ISBN, publishedDate, author).createBook();
    res.status(201).end(JSON.stringify(book));
};

exports.updateBook = (req,res,next)=>{
    const {title, ISBN, publishedDate, author} = req.body;
    let book = new Book(req.params.id,title, ISBN, publishedDate, author).updateBookById();
    res.status(200).end(JSON.stringify(book));
}

exports.deleteBook =(req,res,next)=>{
    Book.deleteBookById(req.params.id);
    res.status(200).end();
}

exports.getAllbooks = (req,res,next)=>{
    res.json(Book.getAllBooks());
};