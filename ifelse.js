var temp=40;
if(temp<40)
{
    console.log("it's very hot outside");

} 
else if(temp==40)
{
    console.log("yes");
}
    else{
    console.log("cold");
}


var email=true;
var google=false;
var facebook=false;
if(email || google || facebook)
{
    console.log("access allowed from our end sir ");
}

// ternary operators in js 

var authun=false;
authun?console.log("yaa please enter"):console.log("get out from here");