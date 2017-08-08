var mongoose = require('mongoose');

//genre schema

var genreSchema = mongoose.Schema({
  name: {
    type: String,
  },
  create_date: {
    type: Date,
    default: Date.now()
  }
})

var Genre = module.exports = mongoose.model('Genres', genreSchema);

console.log(Genre);

//function to get genres
module.exports.getGenres = function(callback) {
  Genre.find(callback);
}

//Add genres

module.exports.addGenre = function(genre, callback) {
  console.log(genre);
  Genre.create(genre, callback);
}
