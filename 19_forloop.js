// FOR LOOP 
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
    
    //multiple cursor lana chahte ho to (ctr + d ) pree kro , selected text ko select krke 
}

// console.log(element); ye dega error , not accessible bahar becoz scope hai hi nahi bahar acess ka

for (let i = 0; i <= 10; i++) {
    const element = i;
     if (element == 5) {
        console.log("5 is best number");
          
     }

    console.log(element);
}


for (let i = 0; i <= 10; i++) {

    console.log(`outer loop : ${i}`);
    
    
    for (let j = 0; j <=10; j++) {

        // console.log(`inner loop value ${j} and outer loop is ${i}`);
        console.log(i + '*' + j + '='  + i*j);
        
            
    }
    
}

let myarray = ["flash", "batman", "superman"]
console.log(myarray.length);


for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
    
}

//keywords break , continue

for (let i = 1; i <= 20; i++) {
    if (i==5) {
        console.log(`detected 5`);
        break;
    
    }
    
    console.log(`value of i is ${i}`);
}


for (let i = 1; i <= 20; i++) {
    if (i==5) {
        console.log(`detected 5`);
        continue; // it is like ek baar maaf krdoo , wo ignore okrr sb as t is rhta haii
    
    }
    
    console.log(`value of i is ${i}`);
}





