const score = 400 
console.log(score); // here automatically defined kiya hai javascript ne ki wo number hai

//explicitally
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const othernumber = 123.9087
console.log(othernumber.toPrecision(5));


// console.log(typeof balance);

const hundreads = 1000000
console.log(hundreads.toLocaleString('en-IN')) //readable format me convert ho jata haii


///MATHS+++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //minus values ko positive banane me help krta haii  positive  positive hi rahta haii
console.log(Math.round(5.8))
console.log(Math.ceil(5.2));//top wala no. choose krega (ceiling fan so its topwalla)
console.log(Math.floor(5.2));//niche wala no. choose krega
console.log(Math.min(4,9,5,4,2));//uses array
console.log(Math.max(4,9,5,4,2));
console.log(Math.random()); // iski value humesha 0 to 1 ke bich me hi aati haii
//so what if agar mai random ko multiply krdu by 10 toh decimsl pt shift ho jaega.........yesssss
console.log((Math.random()*10) + 1); // ab values 10 tkk aegii   aur min value 0 na aae toh hum usme +1 krr dete haii
console.log(Math.floor(Math.random()*10) + 1); // 

const min =10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// see random aapko 0 to 1 ke bich me ki values ko dikhane me believe rakhta hai , so humne accordingly usko chnage krne ka try kiya hai bss




