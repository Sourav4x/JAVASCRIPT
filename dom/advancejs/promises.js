const a=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is complete")
        resolve();
    },5000)
          // without resolve call promises will not work
})
a.then(function(){                  //then has a direct relation with resolve
    console.log("Promise is  complete");
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is running")
        resolve()
    },10000)

}).then(function(){
    console.log("Done")
})
//promise 3
const n=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({user:"sourav",call:"8794391339 ",wp : "6033192643"})
    },6000)
})

n.then(function(user){
    console.log(user);
})
//promises 4
const b=new Promise(function(resolve,reject){
    setTimeout(function(){
        error=false
        if(!error)
            {
        resolve({user:"sourav",call:"8794391339 ",wp : "6033192643"})
            }
            else{
          reject("error")
            }
    },1000)
})

b.then(function(user){
    console.log(user);
    return user.call
}).then(function(me){
    console.log(me)
}).catch(function(m){       // catch for reject
    console.log(m)
}).finally(()=>console.log("the promise is either resolved or rejected"))   // always executed block
//promise handling async functiion
const p5=new Promise(function(resolve,reject){
    error=false
    if(!error){
        resolve("it is resolved")
    }
    else{
        reject("it is rejected")
    }
},2);

async function consume(){
    try{
       const t= await p5
       console.log(t)
    }catch(er){
          console.log(er)
    }
}

consume();
fetch('https://api.github.com/users/sourav4x').then(
    function(data)
    {
        return data.json()
    }).then(function(name){
         console.log(name);
    }
    
).catch(function(err)
{
    console.log(err)
})