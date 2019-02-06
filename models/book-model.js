const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const BookSchema = Schema({
  bookTitle: { 
    type: String,
    required: true,
    min: 1,
    max: 25
  },
  comments: Array,
  dateCreated: {
    type: String,
    default: new Date()
  }
})

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;