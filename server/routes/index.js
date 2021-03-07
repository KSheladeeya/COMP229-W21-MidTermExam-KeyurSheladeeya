
// File name: index.js
// Student name: Keyur Sheladeeya
// Student Id: 301167493
// Date: 07-03-2021 (DD-MM-YYYY)


// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
