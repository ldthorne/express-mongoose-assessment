var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  age: {
    type: Number,
    max: 100,
    min: 13
  },
  budget: {
    type: Number,
    min: 0
  },
  email: {
    type: String,
    required: true
  },
  gender: {
    type: String
  },
  name: {
    type: String,
    required: true
  }
});

var User = mongoose.model('User', userSchema);

module.exports = User;
