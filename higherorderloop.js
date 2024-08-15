const M=new Map();
M.set(1,"INDIA")
M.set(2,"US")
M.set(3,"CAN")
//M.set(3,"US")                      
M.set(1,"INDIA")     // only unique values will be stored 
console.log(M)
for(const [Key,value] of M )        // destructure to print 
    {
        console.log(Key +":---"+ value)
    }
    // Maps are iterateable whr as objects are not 

    prog={
        js:"javascript",
        cpp:"c++",
        j:"java",                // to iterate objects we need to use this 
        c:"C programminng Language"
    }
    for (const key in prog) {
        console.log(key)
            
        }
        for(const key in prog){
            console.log(prog[key])
        }
    //array,map:for of
    //obj:for in

    let lan=["ENG","HINDI","BENG"]
lan.forEach(function (i){         // callback function have no name 
i=i+"Lan"             
console.log(i)
})
/*for (const cs of lan) {
    console.log(cs)
    
}*/


const p= (item) =>{
console.log(item+"na")
}
lan.forEach(p)
lan.forEach((item,index,arr) =>{        // forEach has access to those also 
    console.log(item,index,arr)
})

// Accessing objects inside Array
let a=[{
    lan:"JS",
    my:4
},{
    lan:"C++",
    my:3
},{
    lan:"JAVA",
    my:2
},{
    lan:"C",
    my:1
}]

a.forEach( (item) =>{         // with foreach loop and callback function we can iterate through array of objects 
console.log(item.my)
})
         //forEach loop doesn't returns any value 