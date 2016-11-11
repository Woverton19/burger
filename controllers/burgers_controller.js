var express = require('express');
var router = express.Router();
var cat = require('../models/cat.js');

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	cat.all(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function (req, res) {
	cat.create(['name', 'devour'], [req.body.name, req.body.devour], function () {
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	cat.update({ devour: req.body.devour }, condition, function () {
		res.redirect('/burgers');
	});
});

module.exports = router;
