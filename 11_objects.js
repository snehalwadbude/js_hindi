// singleton bnega agar constructor se banata hai toh
//object literals
// Object.create
// const jsuser = {} //this is object


//symbol declaaration

const mysym = Symbol("key1")

const jsuser = {
    name :"snehal" , 
    "full name" : "snehal w",
    [mysym]  :"mykey1", //symbol 
    age : 20,

    location : "jaipur",
    email : "google.com",
    isloggedin : false,

}
//accsessing the objects
console.log(jsuser.email)   //first way to accsess
console.log(jsuser["full name"])
console.log(jsuser["email"]) //another way to acess but it is good way
console.log(jsuser[mysym]);


jsuser.email = "chatgpt.com" //values ko change krna

// console.log(jsuser["email"]);

// Object.freeze(jsuser) //agar kisi object ko change na karana ho toh
jsuser.email = "chatgpt.microsoftcom" //ye value aai hi nahi because freeze ardi thi nahh
console.log(jsuser);


//jsuser me greetings bhi add karani hai
jsuser.greetings = function(){
    console.log("hello jsuser");
    
}
jsuser.greetingstwo = function(){
    console.log(`hello jsuser , ${this.name}`);
    
}

console.log(jsuser.greetings());
console.log(jsuser.greetingstwo());



