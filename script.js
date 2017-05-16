var express = require('express');
var app = express();
var imported = require('./facts.js')


app.use(express.static(__dirname + '/public'))

app.get('/api/random-fact', function (req, res){
  res.send(imported.pullFact());
});
app.get('/api/facts', function (req, res){
  res.send(imported.facts);
});

var server = app.listen(3000, function (){
var port = server.address().port;
console.log('Example app listening at http://localhost:%s', port);

});
