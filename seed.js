var mongoose = require('mongoose');
var Item = require('./db/models/items2');
var User = require('./db/models/user');
var Cart = require('./db/models/shoppingCart');

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

Item.create(items)
  .then(function (newItems) {
    console.log('newItems: ', newItems)
    createdItems = newItems;
    return User.create(users);
  })
  .then(function (newUsers) {
    createdUsers = newUsers;
  })
  .then(function () {
    var carts = [
      {
        items: [createdItems[0], createdItems[1]],
        user: createdUsers[0]
      },
      {
        items: [createdItems[2], createdItems[3]],
        user: createdUsers[1]
      },
      {
        items: [createdItems[4], createdItems[0]],
        user: createdUsers[2]
      },
    ];
    return Cart.create(carts);
  })
  .then(function () {
    process.kill(0);
  })
  .then(null, console.error.bind(console));
