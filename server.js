var express = require('express');

// Create our app
var app = express();

// Tells express which folder to serve ('public')
app.use(express.static('public'));

// Starts server on port 3000 and runs the console log
app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});