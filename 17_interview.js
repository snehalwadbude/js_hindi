// code execute kaise hota hai in javascript 
//EXECUTION CONTEXT and CALL STACK 
//JAVASCRIPT EXECUTION CONTEXT = jo bhi file apne banai hai use javascript run kaise karegi , this  will happens in two phase 1) memory creation phase , 2) execution phase
// 1) global EC (execution context ) ke adar "this"
//QUE === browser ka global EC alag hai and mode , bun , deno inka GEC alag haii so imp to browser ka hai , waha pr "this" ki value "windows " aati hai
//1) global execution context
//2) function execution context
//3) eval execution context

// javascript is single threaded 


//TWO PHASES
// 1) memory creation phase , 2) execution phase


//1] dekho javascript ka konsa bhi program run hote vakt first time wo jaega global execution me , in this program code "this " me chala jaega
//2]in memory phase me sae variables ko collect krenge , unke andar undefiend rakha jata hai ex. val1 = undefiend , val2 = undefiend , addnum function = defination , result = undefiened
//3]execution phase me , val1 = 10 , val2=5 , addnum ke adnader kuch execute krna hi nahi hai , already defination is hold in it , result =addnum yaha pr ek execution context bnata hai {{{{" new variables+ execution context"}}}}
// jitni baar ye functions execurt krenge na tab tab unka execution context banta chala jaega bss
// / vapis function ke liye upar ki 1] 2] 3] steps aaengi yahapr 3] wala addition wali step perform kregsaa (calculation)

//+++++++++++++++++++CALL STACK 


//aisa hi stack create hota hai
//     |       |
//     |       |
//     |       |
//     |       |
//     |       |
//     |global ex|
