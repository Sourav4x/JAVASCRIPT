const ar1=["me","he","she"]
const ar2=["they","we","them"]
//ar1.push(ar2)
console.log(ar1)
console.log(ar1.concat(ar2))
console.log([...ar1,...ar2]) // can used to form more arrays 
//spread operator
//console.log(ar1.indexOf("they"))
let x=[1,0,[3,4,5],[345,654,[111,432]]]
console.log(x.flat(Infinity)) // we can use 2 also  as exact depth
console.log(Array.isArray("SOURAV"))
console.log(Array.from("SOURAV"))
