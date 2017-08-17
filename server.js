var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;
var config={
    user:'prasanthbabupadma',
    host:'db.imad.hasura-app.io',
    database:'prasanthbabupadma',
    port:'5432',
     password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

function createTemplate(data){
    var title=data.title;
    var id = data.id;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var template =  `
      <html>
    <title>${title}</title>
        <link href="/ui/style.css" rel="stylesheet">
    <body>
    <div class="container">
        <div>
         <a href="/" >Home</a>
            <h1>${heading}</h1>
            ${date.toDateString()}
            </div>
            <div>
            ${content}
            </div>
        </div>
         </body>
          </html>
       `;
      return template;
}




var pool=new Pool(config);
app.get('/test/:art',function(req,res){
   //make a request 
   pool.query("SELECT * FROM article where title=$1",[req.params.art],function(err,result){
    if(err)
    {
        res.status(500).send(err.toString());
    }
     else if(result.rows.length===0){
         res.status(404).send('article not found');
     }
    else{
    res.send(createTemplate(result.rows[0]));
    }
        
    });
   
   
   
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
app.get('/submit-name',function(req,res){
  var name=req.query.name;
names.push(name);
//JSON IS jAVA SCRIPT OBJECT NOTATION
res.send(JSON.stringify(names));
});



var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
