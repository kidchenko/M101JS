var express = require("express"),
    app = express(),
    cons = require("consolidate"),
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
    
var mongoClient = new MongoClient(new Server('localhost', 27017 
                                    , { 'native_parser' : true }));
                                                
var db = mongoClient.db('course');


app.get('/', function (request, response) {
    
    db.collection('hello_fullstack').findOne({}, function (err, doc) {
        response.render('hello', doc);    
    });
    
});

app.get('*', function (request, response) {
    response.send('Page not found', 404);
});

mongoClient.open(function (err, mongoClient) {
    
    if (err) throw err;
    
    app.listen(process.env.PORT, process.env.IP);
    console.log('Express server running');    
});

