const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let bookSchema = new Schema({
    bookId: Number,
    title: String,
    author: String,
    year: String,
    publisher: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

let Book = mongoose.model("Book", bookSchema);

module.exports = Book;
