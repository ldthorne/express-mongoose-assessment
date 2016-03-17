// '/' home page => list of all products
// '/item/:id' => specific item
// '/category/:category' => all products for category
// 'shoppingCart/:userId' => user's shopping cart

var express = require('express');
var Router = express.Router();
var models = require('../db/models');

var Item = models.Item;
var Cart = models.Cart;
var User = models.User;

Router.get('/', function(req, res, next) {
  res.send('HELLO!')
})

Router.get('/item/:id', function(req, res, next) {

})

Router.get('/category/:category', function(req, res, next) {

})

Router.get('/cart/:userId', function(req, res, next) {

})

module.exports = Router;
