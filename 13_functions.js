// console.log("h");
// console.log("i");
// console.log("t");
// console.log("e");
// console.log("e");
//aisa baar barr likhne se acha hai ki , ek functions bana lo and u can use it whenever you want bro

function saymyname(){
    console.log("h");
console.log("i");
console.log("t");
console.log("e");
console.log("e");

}
saymyname() //ye ho gya function ka execution () ye lagaoge tabhi execute hoga

// function add( number1 , number2){
//    console.log(number1 + number2) 

// }

function add( number1 , number2){
   let result = number1 + number2
   return result //ye last wala operation hai jo function krega , iske baad chala gya wo becoz waha pr return aa gya hai
}



// add( 5, 6) // see agar hum numbers pass nhi krenge toh execute hogs hi nahi woh , you have to pass the parameters in it

//add( 3 ,"a") yaha toh "a " aa gya
//javascript me parameters dete wakt datatype lagane ki jarurat nhi hoti hai

// add(3,null)
const result = add(3,5)
console.log("result = ",result);


function loginmessage(username = "sam"){

    if(username === undefined){
        console.log("please enter username");

        return 
        

    }

    return `${username} just loggedinn` //backtics string interpolition

}
console.log(loginmessage("snehal")) //agar maine snehal pass nhi kiya hota nah toh "undefiend " aya hota 

// function ke parameter me hi maine sam de diya hai agar function call krte wakt by chance maine parameter nhi diya to automatically sam print hoga
// otherwise jo parameter pass kr diya hai i.e. snehal wo print ho jaega

function calculateprice(num1){
    return num1

}
console.log(calculateprice(2)); // see shoping krte wakt aap ek hi saman thodi na loge , people can add more na so (200 , 400 , 700)
// toh ab inn parameters ko kaha pr save krenge??  we use rest/spread operator ... ka use krke ... this will bundled up all the values

function calculateprice(...num1){ // yes ...
    return num1

}
console.log(calculateprice(200 , 400 , 500 , 700, 1000)); // see sari values aa gyi na this is REST operator

// function calculateprice(val1,val2,...num1){ // yes ...
//     return num1

// }
// console.log(calculateprice(200 , 400 , 500 , 700, 1000))


const user = {
    username :"snehal",
    price : 199
}  // object ko function me kaise daal skte hai

function handleuser (anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
  
}

handleuser(user) // see hamne yahapr object pass kr diya hai

handleuser({
    username :"snehal",
    price : 1299
}) // this is one more way , humne direct object values bhi passs krdi hai

// we can also pass  the arrays

const mynewarray = [400 , 500 ,600]
function returnsecondvalue(getarray){

    return getarray[1] //second value hi toh return kr rhe hai an

}
console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue( [400 , 500 ,600])); // this is the another way , direct humne array hi dal diya na






