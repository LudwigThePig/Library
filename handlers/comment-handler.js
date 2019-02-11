const Book = require('../models/book-model');

function CommentHandler(){
  
  this.getComments = function(req, res){
    console.log(req + res);
  };
  this.addComment = function(req, res){
    const id = req.body.id;
    
    Book.findOneAndUpdate({_id: id}, function(){})
  };
  this.deleteBook = function(req, res){
    console.log(req + res);
  };
}
module.exports = CommentHandler;