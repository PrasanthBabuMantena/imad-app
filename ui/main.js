console.log("loaded");

var but=document.getElementById('s1');
but.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange = function(){
    if(request.readystate===XMLHttpRequest.DONE)
    {
        if(request.status===200)
        {
            alert("You are loggedin successfully");
        }
        else if(request.status===403)
        {
            alert("Incorrect credentials");
        }
        else if(request.status===500)
        {
            alert("User not found");
            
        }
    }
};
    var username=document.getElementById('username').value;

    console.log(username);
    var password=document.getElementById('password').value;
    
    console.log(password);
    
    request.open('POST','http://prasanthbabupadma.imad.hasura-app.io/create-user',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({usename: username,password: password}));

};








function dean() 
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
     
        
        request.open('GET','http://prasanthbabupadma.imad.hasura-app.io/counter/load',true);
        request.send(null);
   
}
dean();

function list() {
     var request=new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(i=0;i<names.length;i++)
                {
                    list+='<li>'+names[i]+'</li>';
                }
                var ul=document.getElementById('namelist');
                ul.innerHTML=list;
                nam.value='';
                
            }
        }
};
     var name=document.getElementById('nam');
     n=nam.value;
        name.focus
        request.open('GET','http://prasanthbabupadma.imad.hasura-app.io/submit-name?name='+n,true);
        request.send();
   
}

list();
var button=document.getElementById('like');
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
        request.send();
   
};


console.log("successfully loaded");
//for search box
var button=document.getElementById('sub');
var n=nam.value;

button.onclick = function () 
{
    var request=new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(i=0;i<names.length;i++)
                {
                    list+='<li>'+names[i]+'</li>';
                }
                var ul=document.getElementById('namelist');
                ul.innerHTML=list;
                
                
            }
        }
};
     var name=document.getElementById('nam');
     n=nam.value;
        name.focus();
        request.open('GET','http://prasanthbabupadma.imad.hasura-app.io/submit-name?name='+n,true);
        request.send();
   
};
console.log("loaded");





