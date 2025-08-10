const user ={
    username : "snehal",
    price:999,

    welcomemessage : function(){
        // console.log(`${} ,welcome to website`);  hum username direct toh acess nhi kr skte , current context ko refers krne ke liye toh use krna hai " this "
        console.log(`${this.username} ,welcome to website`); // "this " is a current context means iss given scope ke variables ko toh mai acess kr skta hu
        console.log(this); //ye current sari values ko deta hai
        
        
    }
}
user.welcomemessage()
user.username = "sam" //yaha context toh change kr diya 
user.welcomemessage()

console.log(this); // yaha wala this empty dikha raha hai becoz global scope me koi context hai hi nahii

// function chai(){
//     let username="snehaa" 
//     console.log(this); // ye jo function hai wo already humne global me banaya hai , ab iska " this " wo bohot detailed wali chix=ze print krega
    
// }
// chai()


// const chai = function (){
//     let username="snehaa" 
    // console.log(this.username);//functions ke andar this use nahi krnaa , "this " obje cts me hi use hota hai


// }
// chai()

const chai =  () => { //function keyword ko hatado and arrow lagaa do toh arrow function bnn jaegaa
    let username="snehaa" 
    console.log(this); // see arrow function me bhi empty hi result aa  arha hai after using "this " in itt
}
chai()

//++++++++++++++++++++++=arrow functions ++++++++++++++++

// () => {} this are arrow functions and hum inko variaables me bhi hold kr skte haii

const addtwo = (num1,num2) => {
  return num1+num2 //this is "explicit return" jahapr return keyword bahar se laganna pda haii
}

console.log(addtwo(4,5)); // this is one way to writing an arrow function


const addtwoo = (num1,num2) =>  num1+num2 // this is another way , jisme curly brances hata diye and remaining line ko arrow ke sammne le aai , removing return

console.log(addtwoo(5,5));

const addtwooo = (num1,num2) =>  (num1+num2) // third one way
// see curly braces aae toh return likhna hi hai but paranthesis or no paranthesis use kroge toh return ki jarurat nahi pdegii







