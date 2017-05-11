var express = require('express');
var app = express();
var facts = ["i do not like mushrooms", "i do not like onions", "i do not like peppers", "i'm hungry", "yep yep", "this is completed", "this is a really long list", "i am tired", "too much to do","node node node"];



app.get('/', function (req, res){
  res.send(facts[Math.floor(Math.random()*facts.length)]);
});
app.get('/facts', function (req, res){
  res.send(facts);
});

var server = app.listen(3000, function (){
var port = server.address().port;
console.log('Example app listening at http://localhost:%s', port);

});
