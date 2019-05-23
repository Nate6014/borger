var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get("/", function(request, response) {
	burger.all(function(data) {
		
//this is the object that handles the handlebars.
		var hbsObject = { burger: data };
		console.log(hbsObject);
//"index" file where handlebars (hbsObject) match with key values. 
		response.render("index", hbsObject);
	});
});

router.post("/api/", function(request, response) {
	var burgerName = request.body.name;
	

	burger.create(["burger_name"], [request.body.burger_name], function(data) {
			response.redirect('/');
		});
});

router.put('/burger/:id', function(reqest, response) {

	var condition = "id = " + reqest.params.id;

	burger.devour({ devoured: true }, condition, function(data) {
		response.redirect('/');
	});
});

router.put('/burger_reorder/:id', function(request, response) {

	var condition = "id = " + request.params.id;

	burger.refresh({ devoured: false }, condition, function(data) {
		response.redirect('/');
	});
})



module.exports = router;