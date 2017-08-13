var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/host',function(req,res) {
    res.sendFile(path.join(__dirname,'ui','hstl.html'));
});
var counter=0;
app.get('/counter',function (req,res){
    counter=counter+1;
    res.send(counter.toString());
});
var names=[];
app.get('/submit-name/:name',function(){
  var name=req.params.name;
names.push(name);
res.send(JSON.stringify(names));
});
app.get('/article2',function(req,res){
    res.send("<h1>Article 2 is executed</h1>");
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
