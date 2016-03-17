var app = require('express')();


app.listen(3000, function() {
  console.log('Eavesdropping on 3000!')
});


app.use(require('morgan')('dev'));
app.use(require('./routes'));

// connect to DB
require('./db/startDb'); 
