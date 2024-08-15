  /*function add1(){
    a=2
    b=2
    c=a+b
    console.log(c)
  }
  function add(aa,bb){
    c=aa+bb
    return c
  }
  let r=add(1,2)
  console.log(r)
  add1();*/
  function login(user="sam"){  // default values r given if nothing is being passed then the value will be overridden 
    if(!user)                            //undefined is false so user==undefined ->!user
        {
            console.log("enter valid name" )
            return;
        }
    return `Hi Welcome ${user} `
  }
  const r=login()
  console.log(r)

  //Function-2
  s=0; 
  function d(...n){             // ... rest operator extract all  values in it 

    for(i=0;i<3;i++)
        {
            s+=n[i]
        }
        return s
  }
  

  console.log(d(100,200,300))

  const username={
    user:"sou",
    price:100                // passing object to a function
  }
  function obj(anyobject){
    console.log(`hello bro ${anyobject.user} and price is ${anyobject.price}`)

  }
  obj(username)

  let my=[1,2,3,4,5,6,7,8,9]
  function dsa(m){            // passing array to a function
    
return m[3]
  }
let x=dsa(my);
console.log(x)