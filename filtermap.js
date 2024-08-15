let ar=[1,2,3,4,5,6,7,8,9,10]
let p=(item) =>{
    
    return item>3;
        
}
let g=ar.filter(p)
console.log(g)
const newnums=ar.filter((item) =>{
    return item>9
})
console.log(newnums)
newarray=[]
ar.filter((n) =>{
    if(n>6)
        {
            newarray.push(n)
        }
})
console.log(newarray)
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let updated_books=books.filter((book) =>{
    if(book.genre==='Science'){
        return book;
    }
  })
console.log(updated_books)
//also filter means if something is true,only it will be returned 
let new_books=books.filter((book)=>book.publish>2000 )  //if we use {} we need to use return keyword as opened up a scope else no need of using return keyword 
console.log(new_books)
const a=[1,2,3,4,5,6,7,8]
const r=a.map((n) => n+10).map((n) => n+6).filter((n) => n%2==0)   //chaining
console.log(r) //Arrays are object 
///reduce COMMONLY USED IN SHOPPING CART
let no=[1,2,3,4]
const d=no.reduce((acc,cur) => {
    console.log(`${acc} & ${cur}`)
          return acc+cur
},3)
console.log(d)