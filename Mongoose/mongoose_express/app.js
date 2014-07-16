var mongoose = require('mongoose')
    , express = require('express')
    , app = express();

mongoose.connect('mongodb://localhost', function (err) {
	if (err) throw err;
	
	app.get('/', function (request, response) {
		response.send(200, "hello mongoose + express");
	});

	app.listen(3000, function () {
		console.log('express listening on localhost:3000');
	});
});