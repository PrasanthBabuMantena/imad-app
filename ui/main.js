console.log('Loaded!');
counter=0;
var button=document.getElementById("count");

button.onclick =function(){
var span=getElementById("counter");
    counter=counter+1;

    span.InnerHTML=counter.toString();
}