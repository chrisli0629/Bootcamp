var express = require('express');
var request = require('request');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('home.ejs');
});

app.get('/results', function(req, res) {
    var movie = req.query.movie;
    // sending http request to omdbapi
    request('http://www.omdbapi.com/?apikey=1d3975f&s=' + movie, 
            function(error,response,body) {
        var body = JSON.parse(body);
        if (!error && response.statusCode == 200) {
            res.render('results.ejs', {data: body});
        } else {
            res.status(response.statusCode).send(error);
            console.log(error)
        }
    });
});

app.listen(3000, function() {
    console.log("Movies backend running on port 3000");
});