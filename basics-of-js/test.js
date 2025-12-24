console.log("Jovit")

// different ways of variable declaration

const accountId = 112344
let accountEmail = "jovitjohn2004@gmail.com"
var password = "12345"

accountCity = "Delhi"

let accountState;
/*
prefer not to use var for variable declaration
due to its issues with block scope and functional scope.
*/

console.log(accountId);
// console.table lets us display multiple values in a neat, tabular form and makes it convenient to display multiple things
console.table([accountEmail ,accountId , accountCity, password, accountState])