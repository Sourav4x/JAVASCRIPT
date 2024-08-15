let ar=[1,2,3,4]
let aer=["sourav","js","ccs","ddd"]
if(ar.length===aer.length){
    console.log(1)
}
else{
    console.log(2)
}
let obj={

}
if(Object.keys(obj).length=== 0)
    {                         //check if it is empty or not 
        console.log("empty")
    }
//null coalescing operator
var s =null ?? 10

console.log(s)
let y=undefined ?? 30
console.log(y)
let r=undefined ?? 10 ?? 15 ?? 30  //  only the first one will get executed 
console.log(r)

//ternary operator 
 const sis = () => {
    return 4 ? 2<1 : 3;
}
let ret=sis()
console.log(sis());
let price=100
price>100 ? console.log("Greater than 100") : console.log("less than 100");
            //then                           //else 
        
 