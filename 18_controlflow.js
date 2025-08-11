//control flow = conditions , kuch situation me ye condition chale ,kuch me dusri condition chale aiseee bsss

//if

// if(condition){ 

//if the condition is true toh block execute hoga hi

// }

/* < . >  , >= , <=,==, != , === (dekho triple equals will check datatype also) 
*/

const temperature = 41

if(temperature ===41){
    console.log("yes , less than 50 ")
} else{
    console.log("no")
}

console.log("executed");


const score = 200
if(score>100){
    const power = "fly"
    console.log(`user power ${power}`)
}
// console.log(`user power ${power}`) not executed , will show an error due to scope

const balance = 1000
if(balance>500) console.log("test"); //yaha hai implicit scope , ek hi line me jaega ye 
// if(balance>500) console.log("test"), //yaha hai implicit scope , multiple line bhi ja skta hai by using comma 
// console.log("testttt");

//MULTIPLE CONDITIONS TO CHECK

if(balance < 500){
    console.log("less thanm 500 ");
}else if(balance<750){
    console.log("less than 750");
    
}else if( balance <900){
    console.log("less than 900");
    
}else{
    console.log("less than 2000");
    
}


const useerloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true

if(useerloggedin && debitcard && 2==2){ //both conditions will be checked , ek bhi false hua toh && gya 
    console.log("allow purchase");
    
}//AND &&


if(loggedinfromgoogle || loggedinfromemail){ //ya toh google se log in kro , nhitoh email se dono chalega muze
   console.log("user logged in");
   
}//OR ||




// switch statements 

// switch (key) {
//     case value:
    
        
//         break;

//     default:
//         break;
// }


const month = 3
switch(month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;//agar maine break nhi lagaya toh sara code uske niche ka execute ho jaega except default wala
    case 1:
        console.log("april");
        break;
    default:
        console.log("default case matched");
        break;
        
}

//truthy aur falsy values, 
// see kuch values na by default hoti hai ki sahi hi hongi to wo truthy hoti hai

const useremail = "s@google.com" // useremail = [] still it is true
if(useremail){ // maine toh yaha pr kuch true false to diya hi nhi , still man liya gya hai , ki value true hi hongii , yaha [] pr bhi true hi dega
    console.log("got useremail");
    
}else{
    console.log("dont have useremail");
    
}

//falsy values = false , 0 , -0 , Bigint , 0n , "" , null , undefined , NaN (not a number)

//truthy values = "0" , all other than false , 'false' , " " (yaha double course me space bhi haii) ,[] , {} ,function(){}  (string ke andar agar kuch aaya to vo truthyy meri taraf se)

const email =[] 
if(email.length == 0){
    console.log("array is empty");
    
} // checking array is empty


const emptyObj = {}
if(Object.keys(emptyObj).length==0){

    console.log("object is empty");
    
}// checking object is empty  Object.keys(emptyObj) this will give me array of keys and isi array pr length method lagayi toh wo emptiness check krega 


// ++++++++++++++++=+++++++++  Nullish Coalescing operator (??):  null , undefined

let val1 ;
// val1 = 5 ?? 10 // op aya 5 , dekho kayi baar multiple response aa skte hai , toh uss case me ye operator useful haii , multiple checking hongi isme
// val1 = null ?? 10 //ab 10 aya op 
//val1 = undefined ?? 15 // op is 15
val1 = null ?? 10 ?? 15 //jo first value hongi wo jaegi fir , null chhodke like upar wali ex.

console.log(val1);

//++++++++++++++++++++++++++++++  Ternary operator++++++++++++++

// condition ? true : false

const iceteaprice = 100 
iceteaprice <=80 ? console.log("less than 80") : console.log("more than 80");


