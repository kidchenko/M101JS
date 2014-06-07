var express = require('express'),
    app = express(),
    cons = require('consolidate');
    
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function (request, response) {
    response.render('hello', { 'name' : 'Swig' });
});

app.get('*', function (request, response) {
    response.send('Page not found', 404);
});

app.listen(process.env.PORT, process.env.IP);
console.log('Express server running');