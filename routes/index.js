// It's worth seperating these routes into individual routers for Item, Cart, User

var bodyParser = require('body-parser');
var Router = require('express').Router();
var models = require('../db/models');

var Item = models.Item;
var Cart = models.Cart;
var User = models.User;

Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded({extended: true}));

Router.get('/', function(req, res, next) {
  Item.find()
  .then(function(items) {
    res.json(items);
  })
})

Router.post('/item', function(req, res, next) {
  console.log(req.body)
  Item.create(req.body)
  .then(function(item) {
    console.log(item)
    res.redirect('/item/' + item._id);
  })
  .then(null, console.error.bind(console))
})

Router.get('/item/:id', function(req, res, next) {

})

Router.get('/category/:category', function(req, res, next) {

})

Router.get('/cart/:userId', function(req, res, next) {
  Cart.find().populate('user items')
  .then(function(populatedCart) {
    res.json(populatedCart);
  })
})

module.exports = Router;
