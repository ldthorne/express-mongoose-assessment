var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

cartSchema.virtual('price').get(function() {
  var total = 0;
  this.items.forEach(function(item) {
    total += item.cost;
  })

  if (total < 0) throw new Error('BAD TOTAL!')

  return total;
})

module.exports = mongoose.model('Cart', cartSchema);
