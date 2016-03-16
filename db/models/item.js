var mongoose = require('mongoose');

var schema = mongoose.Schema({
  category: {
    type: String
  },
  cost: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

mongoose.model('Item', schema);
