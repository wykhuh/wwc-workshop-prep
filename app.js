var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('<h1>Hello Women Who Code!</h1><h2> See y\'all April 26th.</h2>');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
