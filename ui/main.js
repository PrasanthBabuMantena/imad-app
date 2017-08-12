console.log('Loaded!');

var button=document.getElementById("count");
counter=0;
button.onclick =function(){
var span=getElementById("counter");
    counter=counter+1;

    span.InnerHTML=counter.toString();
};