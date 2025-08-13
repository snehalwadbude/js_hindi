//FOR OF
const arr = [1,2,3,4,5]
// for (const element of object) { //yaha ka object means not the specific Object wali term , yaha ka object means chiz hai like array
    
// }

for (const num of arr) {
   console.log(num);
 
}

const greetings = "hello world!"
for (const greet of greetings) {
    console.log(`each char is ${greet}`)
}

//MAPS

const map = new Map() // map is object , holds key =value pairs , koi duplicate valyes hoti nhi hiai , sari unique values hi dikhengii koi du[lication is not allowed ]
map.set('IN',"India")
map.set('usa', "united states of america")
map.set('FR' , "france")
console.log(map);




for (const [key , value] of map) {
    console.log(key ,':=', value); //array array me aai key value ki pair when we use only key  , so we use [key , value]
    
    
}

// const mapp = new Map() // mapp is object , holds key =value pairs
// mapp.set('IN',"India")
// mapp.set('usa', "united states of america")
// mapp.set('FR' , "france")
// mapp.set('IN',"India")
// console.log(mapp); // duplicates allowwe dhi nahi hain isme bhi

// const myobject = {
//     game1: "nfs",
//     game2 :"spiderman"
// }
// for (const [key , value] of myobject) {
//     console.log(key , ":=", value);
    
    
// } myobject is not iterable , maps are iterable

// for of toh nhi pr for in jarur kam krta hia objects pr


// FOR IN loop
const myobject = {
    js : "javascript",
    cpp : "c++",
    rb: "ruby",
    swift : "swift by apple"
}
//only keys
for (const key in myobject) {
    console.log(key);
       
}
//only values
for (const key in myobject) {
    console.log(myobject[key]);
       
}

//pro key + values
for (const key in myobject) {
    console.log(`${key} shortcut is for ${myobject[key]}`);
    
    
}

//for in loop on the arrays

const programming = ["js","cpp", "ruby"]
for (const key in programming) {
    // console.log(key); // ye toh values 0 to 2 de raha hai , arrays ki bhi key hoti hai by default wo keys 0 se start hoti hai , but objects me hume keys manually dalni pdtii haii
    console.log(programming[key]);
    
    
    
}

// arrays = for of
// objects = for in

const mapp = new Map() 
mapp.set('IN',"India")
mapp.set('usa', "united states of america")
mapp.set('FR' , "france")

for (const key in mapp) {
    console.log(key);
    
   
}//map iterable nahi haii , isne na hi error diya nahi execute hua hai

//FOR EACH loop
//it is a higher order function
const coding = ["js" , "ruby" , "java", "python" , "cpp"]

// coding.forEach( function (item){
//   console.log(item);
    
// })
coding.forEach( (val) => { // ye by arrow function
    console.log(val);
    
})

function printme(item){
    console.log(item);
    
}
coding.forEach(printme) //upar wale print me function ko humne just daaal diya hai for each ke loop ke andar 

// see for each ke andar sirf item hi nahi milta tey also provide index , array list bhi aati haii

coding.forEach( (item , index ,arr) => {
    console.log(item , index , arr);
    
})

//  [{} , {} ,{} ] in this type of scenarios there is also use of foreach

const mycoding = [
    {
        languagename : "javascript",
        languagefilename : "js"

    },
    {
        languagename : "java",
        languagefilename : "java"

    },
    {
        languagename : "python",
        languagefilename : "py"

    }
]

mycoding.forEach( (item) => {

   console.log(item.languagename);
   
}) // dekho array ke andar har ek item yaha pr object hai isiliye acess krte vakt bhi item.(anything you want to acess ) aisa console log kiya hai humne