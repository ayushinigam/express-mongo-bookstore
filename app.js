var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Genre = require('./models/genre');
var Book = require('./models/book');

//Connect to mongoose
app.use(bodyParser());
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function(req, res) {
  res.send('Please use /api/books or /api/genres');
});

app.get('/api/genres', function(req, res) {
  Genre.getGenres(function(err, genres) {
    if(err) {
      throw err;
    } else {
      res.json(genres)
    }
  })
})

app.post('/api/genres', function(req, res) {
  var genre = req.body;
  console.log(genre, "body");
  Genre.addGenre(genre, function(err, genres) {
    if(err) {
      throw err;
    } else {
      res.json(genres)
    }
  })
})

app.get('/api/books', function(req, res) {
  Book.getBooks(function(err, books) {
    if(err) {
      throw err;
    } else {
      res.json(books)
    }
  })
})

app.get('/api/books/:_id', function(req, res) {
  Book.getBookById(req.params._id, function(err, book) {
    if(err) {
      throw err;
    } else {
      res.json(book)
    }
  })
})

app.listen(3000, function() {
  console.log("Running on port 3000");
});
