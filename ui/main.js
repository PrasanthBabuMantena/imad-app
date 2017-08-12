console.log('Loaded!');
counter=0;
var button=document.getElementById("count");

button.onclick =function(){
    counter=counter+1;
var span=getElementById("counter");
    span.InnerHTML=counter.toString();
}