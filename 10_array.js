const marvel_heros = ["thor", "ironman", "spiderman"]
const dc = ["superman", "batman","falsh"]

// marvel_heros.push(dc) //isne array ke ander array dal diya , yaha whole array as a single elemnet ki tarah behave kr raha hai
// console.log(marvel_heros)

// const allheros = marvel_heros.concat(dc)
// console.log(allheros)

const allnewheros = [...marvel_heros,...dc] //spread out = ... lagana
console.log(allnewheros);

const anotherarray = [1,3,2,[4,5,6],7,[6,7,[4,5]]]

const realanotheraaray = anotherarray.flat(Infinity) // flat will create a new array jo readable hogaa ...single ek array ....flat ke andar hum depth dte hai ,ki kitni depth tk mai solve kru , generally we give infinity in it
console.log(realanotheraaray);

console.log(Array.from("snehal")) // jo values aap doge unhi values ka array crete kr diya jaega by "FROM"

console.log(Array.from({name :"snehal"})) // this will create EMPTY array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3)) // of will create new array from set of elements , ab ye set of elemnts kuch bhi ho skte hai  like , variable.....