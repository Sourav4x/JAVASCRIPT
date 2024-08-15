let x=new Object();  // Singleton Object
let y={}              // Non singleton Object
console.log(x)
console.log(y)
x.name="Sourav"
x.gender="M"
 const t=Symbol("a1") 
 x.type=t   
 console.log(x)
 x={
namefield:{
    firstname:{
    name :"sourav",
    roll:"1",                 // Nested objects 
    lastname:{
           name:"paul"
    }

}
}
 }
 console.log(x.namefield.firstname.lastname)        // Accessing Objects In JS
 const man={
    1:"a",
    2:"b"

 }

 const w={
    3:"c",
    4:"d"
 }
/// MAX operations are like array In JS  Objects 
 let u=Object.assign({},man,w)
 const obj3={man,w}
 console.log(obj3)
 console.log(u)
 const obj7={...man,...w} // Spread operator 
 console.log(obj7)
 const database_arrays=[
    {
        id:1,
        name:"Sourav"
    },                                    // array is holding several objects coming from database 
    {
        id:2,
        name:"DSI"
    },
    {
        id:3,
        name:"MES"
    }
 ]
 console.log(database_arrays[1].id)  ///database_arrays[1] -> at this point we reached the specifying obj 
 console.log(Object.keys(x)) // Returns Array of keys  same for values 
 //console.log(x.length)
 console.log(Object.entries(x))