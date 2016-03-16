var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ['produce', 'frozen', 'deli', 'soda'],
    required: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  cost: {
    type: Number,
    min: 0,
    required: true
  }
});

itemSchema.virtual('description').get(function() {
  return this.name + ' are a ' + this.category + ' item that cost $' + this.cost;
})

module.exports = mongoose.model('Item', itemSchema);
