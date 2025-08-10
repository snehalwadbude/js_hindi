// immediately invoked function expressions (IIFE)
// see normally function jaise execute hota hai waise toh hoga hi na , but bohot baar you dont want ki apka scope kharab ho in such cases , aap whole functoion pr bhi () lagado becoz
// () they have that power ki ki wo alag scope banate hai apna hi
// so global scope ke pollution hatane ke liye hum iife ka use krte hai

(function chai(){
    console.log("DB CONNECTED")

})(); //this is NAMED iife

// () = ye function ke upar wala parenthesis and ()=  ye second wala function ke execution wala parenthesis


//ab ye hum arrow function se bhi kr skte the

(()=>{

    console.log( `DB CONNECTED TWO`);
    
})();  // ye wala semicoln kafi jyada imp hai becoz ye semicolon yaha ka function execution ka end dikhaega nhitoh machine will be confuse 
// this is the reason , kayi baar two iife functions ek saath execute nhi ho pate haii

//dekho arguments bhi pass kr skte haii , hai arrow function but dekhna normal function ki tarah hi
((name)=>{

    console.log( `DB CONNECTED TWO ${name}`);
    
})("snehal");   // this is UNNMAED iife