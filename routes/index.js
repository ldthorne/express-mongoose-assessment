// '/' home page => list of all products
// '/item/:id' => specific item
// '/category/:category' => all products for category
// 'shoppingCart/:userId' => user's shopping cart

var express = require('express');
var Router = express.Router();
var models = require('../models');
