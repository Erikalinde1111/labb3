var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

var request = {"namn":"siv"};

//var module2 = require('./module2.js');

//console.log(module2.o.n); // 1
//console.log(module2); // { add: [Function: add], { n: 1 } }
//console.log(module2.add(2,7));

//servern lyssnar efter request såsom: GET POST mm.
//i detta fall skall servern vid get-requesten '/' skicka som respons till clienten index.html-fil vi formar vår respons innan den skickas till clienten
//server-routing
//här har jag skapat en get-ändpunkt
/*app.get('/', function (request, response) {
	response.sendFile(__dirname + '/index.html');
});*/
app.get('/test/:id', function (request, response) {
  response.send(request.params.id);
});

app.get('/user', function (request, response) {
	response.sendFile(__dirname + '/user.html');
});
/*
app.post('/', function (request, response) {
	console.log(request.body.id);
  response.send(request.body.id)
});*/
app.post('/', function(request, response){
	var username = request.body.fnamn;
	console.log(request);
	response.send(username);
});

app.get('/', function(request, response){
	console.log("apa");
	response.sendFile(__dirname + '/index.html');
});

app.listen(3000, function () {
    console.log('The server is running!');
});
// how to retreive data on your nodeside from the other side