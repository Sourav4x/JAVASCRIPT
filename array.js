akm=new Array(4,3,6,9);
console.log(akm);
v=new Array("sun","earth","moon");
console.log(v[0]);
console.log(v);
 console.log(v.unshift("Star")+" "+ v);

v.unshift("STAR");        // means adding infront 
console.log(v);
v.shift();          // sub from back 
console.log(v);
v.pop();         // del. at last index 
console.log(v);
v.push("Galaxy");    // adds at last index 
console.log(v);
console.log(v.indexOf("sun"));
console.log(v.indexOf("me")); // return -1 when the element is no present for furthur reference we can us it 
console.log(Array.from("Sourav"));
//console.log(v.size());        //Variables and Data Types
//const = can't be re-assigned a value and can't be declared again  (block scope)
//let = can be re-assigned a value but can't be declared again (block scope)
//var = it can be re-assigned a value and it can also be declared again  (Global scope)

//=> Never use var in your code instead of let because of block and functional scope issues.
//# console.table([group of variables you want to show in tabular form])