// create a module in node js
module.exports = function(app) {
	
	//home
	app.get('/', function (request, response) {
		//render a jade template
		response.render('home.jade');
	});
}