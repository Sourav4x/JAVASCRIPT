// singleton through cons not  with literals
/// OBJ Literals:
    const me=Symbol("key1")
let x={
    name:"sourav",
    roll:22051031,
    section:"cs-9", 
    "hobby":"code",
    [me]:"key1"             // sq bracket to refer it as symbol

}
console.log(x.name)
console.log(x["name"])
console.log(x["hobby"])  // can be ref
console.log(x[me])
console.log(typeof me)
x.section="cs-34"
console.log(x);
//Object.freeze(x);
//x.section="cs-1"
//console.log(x)

x.grettings=function c(){
    console.log("Hello VS Code user ");
}
x.greet=function(){
    console.log(`Hello User ${this.name}`) // string interpolationn
}

console.log(x.grettings());
console.log(x.greet())
console.log(x)
console.log(x.hasOwnProperty("grettings"))  // property of Objects in JS 
const {name:n}=x
console.log(n)  // desturcturing of objects 
let {roll:r}=x
console.log(r)
