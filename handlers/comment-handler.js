const Book = require('../models/book-model');

function CommentHandler(){
  
  this.getComments = function(req, res){
    console.log(req + res);
  };
  this.addComment = function(req, res){
    const comment = req.body.comment;
    const id = req.params.id;
    console.log(comment);
    
    Book.findOneAndUpdate({_id: id}, {$push: {comments: comment}}, function(err, response){
      if (err){console.log(err)}
      console.log('line 122222');
      res.json({response})
    })
  };
  this.deleteBook = function(req, res){
    console.log(req + res);
  };
}
module.exports = CommentHandler;