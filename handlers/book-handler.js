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
    
    Book.findOne({bookTitle: book}, function(err, response){
      if (err) { 
        res.json({message: err});
      }
      
      if (response){ 
        res.json({message: `${response} already exists`});
      } else {
        let newBook = new Book({bookTitle: book});
        console.log(`line 28`);
        
        newBook.save()
          .then( (data)=>{
            const json = {
              message: `${data} has been added to the library`,
              _id: data.id
            };
            res.json(json);
        });
      }
      
    })
    .catch( err=> console.dir(`line 41`) );
  };
  
  
  this.deleteBook = function(req, res){
    console.log(req + res);
  };
  
  
}
module.exports = BookHandler;