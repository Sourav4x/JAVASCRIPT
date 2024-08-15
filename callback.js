var v= (element) => {
    return element % 2 ===0;
}
console.log(v(2));

var res=[2,3,6,8].every(v);
console.log(res);
var re=[2,4,6,8].every((c)=>{ 
    return c%2 == 0;                 // call back func
});
console.log(re);

var t=[6,12,18].every((d) => (d%2===0));
console.log(t);