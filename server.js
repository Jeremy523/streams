var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello!');
});

app.get('/hello', function(req, res) {
  res.send('Hello to you too!');
});

app.get('/jeremy', function(req, res) {
  res.send('hi jeremy');
});

app.listen(process.env.PORT, function() {
  console.log('Example app listening on port 3000!');
});