const Book = require('../models/book-model');

function BookHandler(){
  
  this.getBooks = function(req, res){
    Book.find({}, function(err, books){
      if (err) {
        console.log(`Hmm, we could not find any books: ${err}`);
      } else {
        res.json({books})
      }  
    })
  };
  
  
  this.addBook = function(req, res){
    const book = req.body.bookTitle.toString();
    
    if (book == ''){
      res.json({message: 'Please enter a book title'});
      return;
    } else {
      Book.findOne({bookTitle: book}, function(err, response){
        if (err) { 
          console.log(err);
        }
        if (response){ 
          res.json({message: `${response} already exists`});
        } else {
          let newBook = new Book({bookTitle: book});

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
    }
  };
  
  
  this.deleteAllBooks = function(req, res){
    Book.deleteMany({}, function(err, response){
      if (err){console.log(err)}
      res.json({response})
    })
  };
  
  
}
module.exports = BookHandler;