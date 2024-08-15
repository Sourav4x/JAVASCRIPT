if(true)
    {
        var a=30
        let b=10                         // var is global scope  let & const will throw error 
        const f=100
    }
    console.log(a)
let x=300              //let const block scope 
if(true)
    {
       let x=20             // curlybraces are scopes except curly braces of objects 
        console.log("inner a value is ",x)
    }
    console.log(x)


    //scope -2
    function one()                     //Closure 
    {
        const w="sourav"
        function two(){
            const t="man"
            console.log(t)
        }
       // console.log(t);                 //this will not get executed 
        //two()
        console.log(w)
        two()
    }
    one();
//
console.log(add1(0))
function add1(n)
{
  return n+4
}
//y(1) // it will not work because init is at 38th line where's we're calling at 37th line 
let y=function m(n) // holding function in a variable 
{
    return n+3
}
console.log(y(1))
