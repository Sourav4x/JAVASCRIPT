let t=100
let num=new Number(100.219) // explicit number
console.log(num)
console.log(num.toPrecision(4))
console.log(num.toLocaleString('en-IN'))
// maths
console.log(Math)   // obj
console.log(Math.abs(-6))
console.log(Math.round(4.3))
console.log(Math.ceil(4.1))  // takes highest value 
console.log(Math.floor(4.6))
console.log(Math.min(3,2,1));// same for max
console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10000)+1)  // otp generation
const max=10
const min=4
console.log(Math.floor(Math.random()*(max-min+1)+min))  // max-min  for values of that  range 
// +1 if values comes up 0.1 then  floor will convert it to 0 that's why +1 then +min for adding up to values of that range 
let s=new String("000")
console.log(typeof (s))  // string is a object 