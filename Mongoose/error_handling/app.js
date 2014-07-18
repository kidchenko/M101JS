var 
	express = require('express')
    , app = express()
    , routes = require('./routes')
    , mongoose = require('mongoose')
    ;

routes(app);

mongoose.connect('mongodb://localhost', function (err) {
	if (err) throw err;
	
	app.listen(3000, function () {
		console.log('express listening on localhost:3000');
	});
});