//server.js
//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/HOME.HTML'));
});
app.get('/PART1.HTML', function(req, res){
  res.sendFile(path.join(__dirname, 'views/PART1.HTML'));
});
app.get('/PART2.HTML', function(req, res){
  res.sendFile(path.join(__dirname, 'views/PART2.HTML'));
});
app.get('/PART3.HTML', function(req, res){
  res.sendFile(path.join(__dirname, 'views/PART3.HTML'));
});

//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});