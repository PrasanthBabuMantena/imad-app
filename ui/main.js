console.log("loaded");
window.alert("Welcome to ECE official");
var button=document.getElementById('like');
var req=new XMLHttpRequest();
req.open('GET','http://prasanthbabupadma.imad.hasura-app.io/counter',true);
var a=req.responseText;
var span=document.getElementById('count');
span.innerHTML=HELLO;

button.onclick = function () 
{
    var request=new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
     
        
        request.open('GET','http://prasanthbabupadma.imad.hasura-app.io/counter',true);
        request.send(null);
   
};


console.log("successfully loaded");