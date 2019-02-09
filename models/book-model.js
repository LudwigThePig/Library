const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  bookTitle: { 
    type: String,
    required: true,
    min: 1,
    max: 50
  },
  comments: [String],
  dateCreated: {
    type: String,
    default: new Date()
  }
})

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;