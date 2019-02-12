const Book = require('../models/book-model');

function CommentHandler(){
  
  this.getComments = function(req, res){
    console.log(req)
    const id = req.params.id;
    Book.findById(id, function(err, book){
      if (err) {console.log(err)}
      res.send(book.comments);
    })
  };
  this.addComment = function(req, res){
    const comment = req.body.comment;
    const id = req.params.id;
    
    Book.findOneAndUpdate({_id: id}, {$push: {comments: comment}}, function(err, response){
      if (err){console.log(err)}
      res.json({response})
    })
  };
  this.deleteBook = function(req, res){
    console.log(req + res);
  };
}
module.exports = CommentHandler;