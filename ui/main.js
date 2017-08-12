console.log('Loaded!');
counter=0;
var button=document.getElementById("count");
var span=getElementById("counter");
button.onclick =function(){
    counter=counter+1;
    span.InnerHTML=counter.toString();
}