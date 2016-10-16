/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/

// Dependencies
// =============================================================
var express = require('express');
var router = express.Router();

var orm = require('../models')["Burger"];


// Routes
// =============================================================
router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	orm.findAll({
		
	}).then(function(result){
		var hbsObject = { burgers: result };
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function (req, res) {
	var tastyBurger = req.body.name;

	orm.create({burger_name: tastyBurger}).then(function(){
		console.log("Added " + tastyBurger + "!");
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	var eatenBurger = req.params.id;

	orm.update({ devoured: 1 }, { where: {id: eatenBurger} }).then(function(){
		console.log("Devoured " + eatenBurger + "!");
		res.redirect('/burgers');
	});
});

module.exports = router;