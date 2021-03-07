// File name: books.js(models)
// Student name: Keyur Sheladeeya
// Student Id: 301167493
// Date: 07-03-2021 (DD-MM-YYYY)


let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
