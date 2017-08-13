console.log("loaded");
window.alert("Welcome to ECE official");


var button=document.getElementById('like');
button.onclick = function () 
{
    var request=new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if(request.status===404)
            {
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=245543;
            }
        }
    };
     
        
        request.open('GET','http://prasanthbabupadma.imad.hasura-app.io/counter',true);
        request.send(null);
    

   
};


console.log("successfully loaded");