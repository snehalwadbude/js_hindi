//arrays

const myarry = [0,1,2,3,4,5,6, true , "neha"] //elements different bhi ho skte haii

const heros = ["shaktiman ", "bum bum bole" , "hatim"]
const heross = new Array(1 , 2,7) // A capital hi chahiye hota hai

console.log(myarry[3]);

myarry.push(6) // values ko add krega array me
myarry.push(99)
myarry.pop(99) //last value ko remove kr dega
myarry.unshift(8) //start me add krdi hai 8 value
myarry.shift() // isme 8 gayab ho gy hai

console.log(myarry.includes(9)); //boolean ke terms me answer dega ye
console.log(myarry.indexOf(2));




const newarray = myarry.join()
console.log(myarry);
console.log(newarray); // isme join operation will convert your array elements in the string format sepersted by commas







//arrays are resizable 
//value ko access hum indexing se krte hai from 0
//arrays me shallow copies banate hai yani jo changes hongi wo original values mai hoti haii i.e by reference
//deep copies are the copies jisme original arrays nhi bdlte hai

console.log(myarry[2])

console.log(typeof myarry);


////////////////////////slicce , splice//////////////

console.log("A" , myarry); // as it is array

const myr = myarry.slice(1, 3) // gives section of an array  1 shows starting index and 3 shows ending index jo include nhi hoga
console.log(myr);
console.log("B" , myarry);

const myrr = myarry.splice(1,3) // splice includes last wala index wala number
console.log(myrr);
console.log("C", myarry); // yaha splice wala portion original array se nikal hi chuka haiii  ...............original array got changed bro

