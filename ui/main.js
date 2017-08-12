console.log('Loaded!');

var button=document.getElementById('count');
var counte=0;
button.onclick =function(){
    counte=counte+1;
var span=document.getElementById('counter');
    span.innerHTML=counte.toString();
};