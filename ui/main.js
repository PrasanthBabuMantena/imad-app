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
var su=document.getElementById('sub');
var n=name.value;
su.onclick=function(){
   //make a request
   //default trail
   var name=["name1","name2","name3"];
   var list='';
   for(i=0;i<name.length;i++){
       list+='<li>'+name[i]+'</li>';
   }
   var ul=document.getElementById('namelist');
   ul.innerHTML=list;
};
