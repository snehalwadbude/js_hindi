const name = "snehal"
const repocount = 50

//console.log(name + repocount+ " value");  this is the older version , how we use strings in earlieer  days but now its completely different `

//instead we use "BACKTICKS" = ``     for string interpolition   ,  "hum usme variable inject kara skte hai by using $ symbol"

console.log(`hello my name is ${name} and my repo count is ${repocount}`)  // this is better , modern way

//string declaration another way

const gamename = new String('snehallllllll-ui-m')  // ye object invoke krega 

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase()); // methods
console.log(gamename.charAt(5)); // konse jagah pr konsa character prresent haii
console.log(gamename.indexOf('s')); // konse position pr konsa character prresent haii


const newstring = gamename.substring(0 , 4)  // 0 is starting undex and 4 is ending index || yaha no negatives okk
console.log(newstring);


const anotherString = gamename.slice(-16 , 6) // hum slice ke andar negative numbers ka use kr skte haii , the best part  \\but jo first number hai wo string se ulta ginti kara raha and second number no. of character dikha raha ki kiyne aaenge
console.log(anotherString);

const newstring1 = "     neha     "
console.log(newstring1);
console.log(newstring1.trim()); // yahapr sari jo extra spaces hongi wo gayab ho jaegi

const url = "https//sneha%20000"

console.log(url.replace('%20' , '-'));

console.log(url.includes('sunddar')); // it checks ki ye value present hai ya nahi hai

console.log(gamename.split('-')) // see spit hum use krte hai taki hum ek sstring ko  on the basis of kuch symbl seperate kr paye in terms of arrays  for ex see  the variable gamename
// '-'  this is seperator  split(seperator , limit)  this is the syntax
 
// see the docummentation on methods of stringsss







