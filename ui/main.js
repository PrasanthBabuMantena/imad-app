console.log("loaded");
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
     
        
        request.open('GET','http://prasanthbabupadma.imad.hasura-app.io/counter',true);
        request.send(null);
   
};

function list() 
            if(request.status===200)
            {
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(i=0;i<names.length;i++)
{
    var request=new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState===XMLHttpRequest.DONE)
        {
                {
                    list+='<li>'+names[i]+'</li>';
                }();
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
   
};

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
Dean();


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
                nam.value='';
                
            }
        }
};
     var name=document.getElementById('nam');
     n=nam.value;
        name.focus();
        request.open('GET','http://prasanthbabupadma.imad.hasura-app.io/submit-name?name='+n,true);
        request.send();
   
};

var art=



   
  

