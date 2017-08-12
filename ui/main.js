console.log("loaded");
window.alert("Welcome to ECE official");
var button=document.getElementById('counter');
var counter; 
button.onclick = function () {
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};
console.log(56);