var mongoose = require('mongoose');
require('./models');
mongoose.connect('mongodb://localhost/bestDb');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MONGOOSE CONNECTION ERROR:'));
