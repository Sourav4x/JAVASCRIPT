let v=1
let u=String(v);
console.log(typeof(u));
console.log(u);
let k=1
let b=Boolean(k);
console.log(b);
console.log(typeof(b));
var name=""
let a=Boolean(name);
console.log(a);        // output false whenn string is empty 
var name="sourav"
let g=Boolean(name);
console.log(g);       // output true when string is not empty  //null -> NAN undefined ->undefined
let s="sourav"
let you=Number(s);
console.log(you);
// problem
console.log("1"+4+3) // if string is at first pos then the whole value gets treated as string
console.log(1+4+"4") // if string is at last then it works normally 
console.log(1+"2"+1) // if string is at middle then  works normally 
console.log(+true)
console.log(+"")
console.log(null==0)// doesn't convert null
console.log(null>=0)// converts null to 0
// === strict check not only checks the value  but also the data type
console.log("2"==2)
console.log("2"===2)
console.log(undefined>=0)
console.log(undefined==0)

let h="c"
console.log(typeof h)
const id=Symbol(1)
const  aid=Symbol(1)
console.log(id===aid)      // symbols unique ref. for id's.
