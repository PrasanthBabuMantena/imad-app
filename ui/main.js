console.log("loaded");
window.alert("Welcome to ECE official");

var button=document.getElementById('like');
button.onclick = function () {
    
    var request=new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readystate===XMLHttpRequest.DONE)
        {
            var a=10;
           
            if(request.status===200)
            {
                var a=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=a.toString();
            
                document.write(a.toString());
            }document.write(a.toString());
            
        }
    };
        
        request.open('GET','http://prasanthbabupadma.imad.hasura-app.io/counter',true);
        request.send(null);
    

   
};


console.log("successfully loaded");