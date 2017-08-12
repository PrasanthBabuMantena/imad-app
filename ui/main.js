console.log('Loaded!');

var counte=0;
var button=document.getElementById('counter');
button.onclick =function(){
    counte=counte+1;
var span=document.getElementById('count');
    span.innerHTML=counte.toString();
};