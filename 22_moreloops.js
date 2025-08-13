const coding = ["js" , "ruby" , "java", "python" , "cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
    // return item , for each return nhi krta haii it gives result undefined
    
})
console.log(values); // humne sirf for each function ko ek variable me dala hai

const mynumbs = [1,2,3,4,5,6,7,8,9,10]
// we are using filter becoz foreach return nhi krta tha values ko ,ye krega
const newnumbs = mynumbs.filter((num) => num > 4) // aise num do , jo num 4 se bade ho    //call back ( () => ) OR ( () =>{} )
console.log(newnumbs);

//when u use arrow function on above

const newnumbss = mynumbs.filter((num) =>
    {
      return num > 4
    }
) 
console.log(newnumbss);// agar without return kroge to result empty array aaega , explicit return me whenever you use SCOPE (object) aapko return keyword lagana hi pdega

// but agar aapko filter nhi use krna FOREACH hi use krna hai toh kya kroge??
//here u r using if condition

const newnum = []
 mynumbs.forEach( (num) => {
    if (num>4) {
        newnum.push(num)
        
    }
 })
 console.log(newnum);
 



 ////////////////////////
 const books = [
    {title : "book one" , genere : "fiction" , publish : 1981 , edition : 2004},
    {title : "book two" , genere : "non-fiction" , publish : 1989 , edition : 2005},
    {title : "book three" , genere : "fiction" , publish : 1988 , edition : 2006},
    {title : "book four" , genere : "history" , publish : 1985 , edition : 2007},
    {title : "book five" , genere : "love" , publish : 1988 , edition : 2004},
    {title : "book six" , genere : "history" , publish : 1911 , edition : 2005}
 ]

 const userbooks = books.filter( (bk)=> bk.genere==="history") // yaha agar {} use krte toh return lagana pdta ok!!
 console.log(userbooks);
 
 let userbookss = books.filter((bk)=> {
    return bk.publish >=1960})
 console.log(userbookss);
 

 /////////////////////////////////////////////////

 const numbers = [1,2,3,4,5,6,7,8,9,10]
 //hume har no. me 10 add krna hai
 //u can use map function
 //aap foreach bhi use kr skte hai

//  const newnumber = numbers.map( (num) => {return num+10}) 
// const newnumber = numbers.map().map() // CHAINNING = multiple functions we can apply on single variable
const newnumber = numbers.map( (num) =>num *10).map((num) => num+10).filter((num) =>num>=40) // chaining me jo bhi result hai wo array pr next function work krta haii , jaiseki yahapr
//yahapr first map me number jo multiply huw hai usi ke  array ke upar +10 wala operation perfor hoga 
 
console.log(newnumber);

///////////////////////REDUCE METHOD

const snehal = [1 , 2, 3]
const mytotal = snehal.reduce( function(acc , currval){
    console.log(`acc : ${acc} and currval : ${currval}`);
    
    return acc + currval
} , 0) // reduce( function(){}) yahapr normal callback bhi kr skte the but ye wala smzne me easy ahii 
// acc = accumulator , start kaha se krna hai (jo scope ke bahar 0 diya hai na wohi start hota hai)
//currval = current value , jo array se uthai jaengii 
//jo value (acc +  currval) ki hongi , wo vapis se jaegi acc ke andar and this will continue
 
console.log(mytotal);

//by arrow function

const mytotals  = snehal.reduce((acc , currval)=> acc+currval , 0) //   ( ()=> )
console.log(mytotals);


const shoppingcart = [
    {
        itemname : "js course",
        price: 2999
    },
    {
        itemname : "python course",
        price: 999
    },
    {
        itemname : "mobile dev course",
        price: 5999
    },
    {
        itemname : "data science course",
        price: 12999
    },
    {
        itemname : "cpp course",
        price: 2999
    },
]

// aapko krna hai sari courses kharide hai , aapko prices ko add krni haii

const totalprice = shoppingcart.reduce((acc,item )=>(acc + item.price) , 0)
console.log(totalprice);

