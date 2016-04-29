var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var port = process.env.PORT || 3000;

// =======================
// middleware & config
// =======================
app.set('views', 'views');

app.engine('hbs', exphbs({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: './views/layouts'
}));

app.set('view engine', 'hbs');

app.use(express.static('public'));

// =======================
// routes
// =======================

app.get('/', function (request, response) {
  response.send('<h1>Hello Women Who Code!</h1><h2> See y\'all April 26th.</h2>');
});

// ========= Add your  code for '/books' route here =========



// =======================
// server
// =======================

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
