const accountId = 1445678  //we never ever change it 
let accountEmail = "snehal@google.com"
var accountPasword = "12345"
accountCity = "jaipur"
let accountState ;

accountEmail = "@gmail.com"
accountPasword = "789"
accountCity = "pune"

// accountId=56788
// console.log(accountId);
// console.log(accountEmail);
//itna jo upar pe kiya wo hum by using table bhi kr skte hai instead of using log their use "table"

console.table([accountId , accountEmail , accountPasword, accountCity, accountState]);

/*prefer not to use var
because of issue in block scope and functional scope*/

