let x="sourav"
let y=x
y="debz"             // primitive data types gets stored in stack so a copy of value gets passed 
console.log(y)
let m={
      y:"first"
      

}
let n=m;
n.y="second"           // Non-primitive data types gets store in the heap so the reference of 
console.log(m)         // m is passed in n that's why both of them points to same loc
console.log(n)         // so when one changes another also automatically change 
console.log(typeof n)