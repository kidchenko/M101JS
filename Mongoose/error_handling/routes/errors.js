module.exports = function (app) {
    // 400
    app.use(function (request, response, next) {
        response.status(400);

        if (request.accepts('html')) {
            return response.send('<h2>Sorry, page not found.</h2>');
        }

        if (request.accepts('json')) {
            return request.json({ error : 'Not found' });

        }

        response.type('txt');
        response.send('hmm, page not found');
    });

    app.use(function (err, request, response, next) {
        console.error('error at %s \n', request.url, err);
        respnse.send(500, 'Oops!');
    });
}
