'use strict';

var expect = require('chai').expect;
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
const MONGODB_CONNECTION_STRING = process.env.DB;
const Book = require('../handlers/book-handler.js');
const Comment = require('../handlers/comment-handler.js');

const book = new Book;
const comment = new Comment;

module.exports = function (app) {

  app.route('/api/books')
    .get(book.getBooks)
    
    .post(book.addBook)
    
    .delete(book.deleteBook);



  app.route('/api/books/:id')
    .get(comment.getComments)
    
    .post(comment.addComment)
    
    .delete(comment.deleteComment);
  
};
