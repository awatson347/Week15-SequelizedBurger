// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');1
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


// Routes
// =============================================================
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var Burger = require("./models/")["Burger"];
Burger.sync();


// Listener
// ===========================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});