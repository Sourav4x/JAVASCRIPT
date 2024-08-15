const ch=112
let x=2  // can't declared again 
var y=8  // can be declared again
u=9;
console.table([ch,x,y]);
//const = can't be re-assigned a value and can't be declared again  (block scope)
//let = can be re-assigned a value but can't be declared again (block scope)
//var = it can be re-assigned a value and it can also be declared again  (Global scope)

//=> Never use var in your code instead of let because of block and functional scope issues.
//# console.table([group of variables you want to show in tabular form])