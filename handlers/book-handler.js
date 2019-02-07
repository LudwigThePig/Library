const Book = require('../models/book-model.js');

function BookHandler(){
  
  this.getBooks = function(req, res){
    Book.find({}, function(err, books){
      if (err) {
        console.log(`Hmm, we could not find any books: ${err}`);
      } else {
        console.log(books);
      }
    })
  };
  
  
  this.addBook = function(req, res){
    const book = req.body.bookTitle.toString();
    console.log(book);
  };
  
  
  this.deleteBook = function(req, res){
    console.log(req + res);
  };
  
  
}
module.exports = BookHandler;