// premitive 
// 7 types : string , number , boolean , null , undefined, symbol, bigint

// reference non prmitive
// arrays , objects , functions

const score = 100
const scorevalue = 100.8

const isloggedin = false

const outsidetemp = null 
let useremail ; // undefined

const id = Symbol('123') //id toh unique hi toh hoti hai na
const idvalue = Symbol('123') // ab bhalehi same same dikh raha hai , but its not that same 
// symbol ka kam hi hai ki , uniqness lana hota hai .....bss

console.log(id=== idvalue);

const bignumber = 34546575609409634634n//bohot bda number  bss last me "n " laga diya hai na


//array ka return type  "OBJECT" aata hai

const heros = ["shaktiman", "nagaraj","doga" ]
 let myobj={
    name : "neha",
    age : 19
}

console.log(typeof heros)

// function ka return type "FUNCTION" hi aata hai

const myfunction = function(){
    console.log("hello world");
    
}
console.log(typeof myfunction)

let myname = "neha"
console.log(typeof myname);

let number = 9
console.log(typeof number)

let value = false
console.log(typeof value);


let youtube = null
console.log(typeof youtube);


let instagram = undefined
console.log(typeof instagram)

let YT ;
console.log(typeof YT);

let facebook =""
console.log(typeof facebook )

let Vvalue = 7945349543986799325309983
console.log(typeof Vvalue);

const ids = Symbol('234')
const anotherids = Symbol('234')// symbol ka "S" hamesha capital hi chahie hota hai

console.log(typeof anotherids);
console.log(typeof ids);

















