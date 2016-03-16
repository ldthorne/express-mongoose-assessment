var mongoose = require('mongoose');

var schema = mongoose.Schema({
  items: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

schema.virtual('price').get(function() {
  return items.reduce(function(currTotal, item) {
    return currTotal + item.price
  }, 0);
});

module.exports = mongoose.model('ShoppingCart', schema);
