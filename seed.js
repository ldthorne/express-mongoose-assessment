require('./db/startDb');
var mongoose = require('mongoose');
var Item = require('./db/models/item');
var User = require('./db/models/user');
var Cart = require('./db/models/cart');

var items = [
  {
    name: 'Eggs',
    cost: 50,
    category: 'produce'
  },
  {
    name: 'Bread',
    cost: 500,
    category: 'produce'
  },
  {
    name: 'Mustard',
    cost: 2,
    category: 'produce'
  },
  {
    name: 'Ice Cream',
    cost: 20,
    category: 'frozen'
  },
  {
    name: 'Soda',
    cost: 50,
    category: 'soda'
  },
];

var users = [
  {
    name: 'Yustynn',
    age: 99,
    budget: 10000,
    email: 'yus@ty.nn'
  },
  {
    name: 'Sam',
    age: 99,
    budget: 10000,
    email: 's@a.m'
  },
  {
    name: 'Leon',
    age: 99,
    budget: 10000,
    email: 'le@o.n'
  },
];

var createdItems;
var createdUsers;

Promise.all([
  Item.remove({}),
  Cart.remove({}),
  User.remove({}),
]).then(function () {
  return Item.create(items)
})
.then(function (newItems) {
  createdItems = newItems;
  return User.create(users);
})
.then(function (newUsers) {
  createdUsers = newUsers;
})
.then(function () {
  var carts = [
    {
      items: [createdItems[0]._id, createdItems[1]._id],
      user: createdUsers[0]._id
    },
    {
      items: [createdItems[2]._id, createdItems[3]._id],
      user: createdUsers[1]._id
    },
    {
      items: [createdItems[4]._id, createdItems[0]._id],
      user: createdUsers[2]._id
    },
  ];
  return Cart.create(carts);
})
.then(function () {
  console.log('Database seeded!');
  process.kill(0);
})
.then(null, function (err) {
  console.log('Not seeded! Tell a fellow!');
  console.error.bind(console);
  process.kill(1);
});
