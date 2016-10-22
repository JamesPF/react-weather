var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

// Tells express which folder to serve ('public')
app.use(express.static('public'));

// Starts server on port 3000 and runs the console log
app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
