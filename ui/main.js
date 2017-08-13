console.log("loaded");
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
var name=document.getElementById('nam');
var button=document.getElementById('sub');
var n=name.value;
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
                    list='<li>'+names[i]+'</li>';
                }
                var ul=document.getElementById('namelist');
                ul.innerHTML=list;
            }
        }
};
     
        
        request.open('GET','http://prasanthbabupadma.imad.hasura-app.io/submit-name?='+n,true);
        request.send();
   
};

