
function hello(name){
    console.log("hey sourav");
    console.log("hey "+name);
    console.log(name);
}
hello("Sourav");
hello("Harshita");

function dare(v)
{
    if(v+4==10)
    {
        return "hello";
    }
    else{
        return  "bye";
    }
}
var f=dare(6);
var g=dare(8);
console.log(f);
console.log(g);

function big(a){
    var v=parseInt(a);
    console.log(v+5); 
}
var y=function bigt(a)
{
    var f=parseInt(a);
    console.log(f+9);
}

y("230");
