const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema( {
    BookName : {
        type: String,
    },
    bookAuthor : {
        type: String
    },
    bookPrice: {
        type: String
    }
});

const Books = mongoose.model("Books", BookSchema);
module.exports = Books;