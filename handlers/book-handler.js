function BookHandler(){
    
  this.getComments = function(req, res){
    console.log(req + res);
  };
  this.addComment = function(req, res){
    console.log(req + res);
  };
  this.deleteComment = function(req, res){
    console.log(req + res);
  };
}
module.exports = BookHandler;