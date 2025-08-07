// const tinderuser = new Object()    singleton object
const tinderuser = {}

tinderuser.id = "wjefernj"
tinderuser.name="sam"
tinderuser.isloogedin = false

// console.log(tinderuser)

const regularuser = {
    email : "@gmail.com" , 
    fullname : {
        userfullname : {
            firstname : "snehal" ,
            lastname : "w"
        }
    }
}
console.log(regularuser.fullname); //upar upar se hi pura ka pura object acess krna
console.log(regularuser.fullname.userfullname.firstname); // loop me ghusakar jana by using dot (.)

const obj1 = {1:"a",  2 : "b"}
const obj2 = {3: "c", 4:"d"}

// const obj3 = {obj1 , obj2} //ye kiya toh problem aa rahi , same as array ki object ki andar object aa rha hai

// const obj3 = Object.assign( {}, obj1 , obj2) //new method .assign()  +++++++++++++++ naya object return karana 

const obj3 = {...obj1, ...obj2}  // ho gya combine ,,,, most of the time we use it 
console.log(obj3);



console.log(tinderuser);
console.log( Object.keys(tinderuser)); //yahapr hame sari keys ka array milega tinderuser object ki ander ki sari keys ka
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser)); //har ek entry ka array bnn jata hai bss

