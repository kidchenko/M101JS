var express = require("express"),
    app = express(),
    cons = require('consolidate'),
    bodyParser = require('body-parser');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser());

function errorHandler(err, request, response, next) {
    console.log(err.message);
    console.log(err.stack);
    request.status(500);
    response.render('error_template', { error : err });
}

app.use(errorHandler);


app.get('/', function (request, response) {
    response.render('fruits', { fruits : 
                                    ['apple'
                                    , 'orange'
                                    , 'banana'
                                    , 'peach'
                                    ] } );
});

app.get('/:name', function (request, response) {
    var name = request.params.name;
    var getVar1 = request.query.getVar1;
    var getVar2 = request.query.getVar2;
    response.render('hello', { name : name, 
                               getVar1 : getVar1, getVar2 : getVar2});
});

app.post('/favorite_fruit', function (request, response, next) {
    var favorite_fruit = request.body.fruit;
    if (!favorite_fruit) next(Error('Please select a fruit!!')); 
    response.send('Your favorite fruit is ' + favorite_fruit);
});

app.listen(process.env.PORT, process.env.IP);
console.log('Express server running');