var express = require("express"),
    app = express();

app.get('/', function (request, response) {
    response.send('Hello express!');
});

app.get('*', function (request, response) {
    response.send('Page not found', 404);
});

app.listen(process.env.PORT, process.env.IP);
console.log('Express server running');