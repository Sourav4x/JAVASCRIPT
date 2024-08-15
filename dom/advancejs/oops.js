const obj={
    user:"sourav",
    roll:"22051031",              //object literal
    lan:"JAVA",
    us(){
           console.log(this)
           console.log(this.lan)
    }
}
console.log(obj.us())
function user(name,roll,lan){
    this.name=name
    this.roll=roll
    this.lan=lan                                 // Constructor Function
    return this;
}

const p= new user("me",1031,"C++")     //new creates an instance / a copy
const q=new user("us",31,"JS")             // with out new this two functions will override
console.log(p)                      
console.log(q)

