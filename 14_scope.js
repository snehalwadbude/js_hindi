// let var const
// {} are scopes
// let a = 10;
// const b = 20;
// var c =30;
//bahar ka area means global scope ,aap yahi value block ke andar bhi use kr skte ho, but block ki values bahar nhi aa skti wo andar hi rahegi

let a = 300;
if(true){
let a = 10;
const b = 20;
console.log("inner = ",a);

// var c = 30; //block scope

}
console.log(a);
// console.log(b);
// console.log(c);

//chhote bacche bado ki ice cream le skte hai , but bde thodi nah chhoto ki ice cream chhinege  yahapr bde means one() & chhote are two()

function one(){
    const username ="snehal"

    function two(){
        const website ="youtube"
        console.log(username); //iska global scope toh one() hi haina
        

    }
    // console.log(website); // ye toh baccha tha ise thodi nah bda access krega so ye error fekega

    two();
    
}
one()


if(true){
    const username = "snehal"

    if(username == "snehal"){
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);  scope ke bahar nhi accsess ho payega yarr

    
}
// console.log(username); scope ke bahar nhi accsess ho payega yarr

//+++++++++++++++++++++++++++++++++INTERESTING++++++++++++++++++

addone(3)//ye ok hi rahega executeabke hai 
function addone(num){
   
    return num +1

}

addtwo(9) //is function ka call hona declaration ke pahele will provide you an error because aapne apke function ko variable me store krke rakha hua haii
const addtwo = function (num){
   
    return num +2

}

