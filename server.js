var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;
var crypto=require('crypto');
var bodyParser=require('body-parser');
var session=require('express-session');

function hash(input,salt){
    var hash=crypto.pbkdf2Sync(input,salt,10000,512,'sha512');
    return ["pbkdf2","1000",salt,hash.toString('hex')].join('$');
    
}
var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(session({
    secret:`somerandomvalue`,
    cookie:{maxAge:1000*60}
    
}));

var config={
    user:'prasanthbabupadma',
    host:'db.imad.hasura-app.io',
    database:'prasanthbabupadma',
    port:'5432',
     password:process.env.DB_PASSWORD
};


var pool=new Pool('config');
app.get('/schedule',function(req,res){
var trno=req.query.trno;
pool.query('Select * from schedule where trno=$1',[trno],function(result,err){
if(err)
     {
result.status(502).send("Something went wrong");
      }
else{
var li=['<tr><th>Station</th><th>Arrival Time</th><th>Departure Time</th></tr>'];
for(i=0;i<result.rows.length;i++)
   {
li.push('<tr>'+'<td>'+result.rows[i].station+'</td><td>'+result.rows[i].tarrival+'</td><td>'+result.rows[i].tdeparture+'</td></tr>');
}
console.log('reached server');
res.send(JSON.stringify(li));
  }
});

});


app.get('/hash/:input',function(req,res){
   //hash the input
   var hashedString=hash((req.params.input),'this-is-a-salt');
   res.send(hashedString);
});

var pool=new Pool(config);
app.post('/create-user',function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    
   var dbstring=hash(password,crypto.randomBytes(128).toString('hex'));
   pool.query(`INSERT INTO "myuser" (username,password) VALUES($1,$2)`,[username,dbstring],function(err,result){
       if(err)
       {
           res.status(500).send("user exists");
       }
       else 
       {
           res.send(username+" successfully created");
       }
   });
   
    
});

app.post('/login',function(req,res){
  var username=req.body.username;
  var password=req.body.password;
  
  pool.query('SELECT * FROM "myuser" where username=$1',[username],function(err,result){
     if(err)
     res.status(500).send(err.toString());
     else if(result.rows.length===0)
     {
         res.status(400).send("User not found");
     }
     else
     {
         var dbstring=result.rows[0].password;
         var salt=dbstring.split('$')[2];
         var hashedString=hash(password,salt);
         if(hashedString===dbstring){
             //create a session
             req.session.auth={userId: result.rows[0].id};
             
             res.send("You are successfully logged in");
         }
         else 
         res.status(403).send("Incorrect credentials");
         
     }
    
  });

    
    
});
app.get('/checklogin',function(req,res){
   if(req.session&& req.session.auth&& req.session.auth.userId)
   {
       res.send("You are logged in");
   }
   else{
   res.send("you are not logged in");
   }
});

app.get('/logout',function(req,res){
   delete req.session.auth;
 res.send("u r logged out");
    
});







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
app.get('/counter/load',function(req,res){
res.send(counter.toString());
});
    


var names=[];
app.get('/submit-name',function(req,res){
  var name=req.query.name;
  if(name ==='')
  names=names;
  else
names.push(name);
//JSON IS jAVA SCRIPT OBJECT NOTATION
res.send(JSON.stringify(names));
});



var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
