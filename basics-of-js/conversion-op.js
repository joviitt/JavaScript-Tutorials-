let score = "33abc"
let score1 = null

//console.log(typeof score); // typeof is used to find the data type of the variable or any value that is given as its argument
//console.log(typeof(score)); // can be used as a function as well

let valueasNum = Number(score) // conversion to NUMBER
// conversion of a string which is not a pure number such as 33abc can lead to errors(NaN-not a number) so check carefully

let valueasNum1 = Number(score1)
// console.log(typeof valueasNum)
// console.log(valueasNum)
// console.log(valueasNum1)

// console.log(typeof NaN); // type of NAN is number

//conversion of num to str
let someNumber = 33
let stringSomeNumber = String(someNumber)
// console.log(typeof stringSomeNumber);


//conversion to boolean
let isLoggedIn = " ";
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);
/*
0 => false
1 => true
"" => false
"anystring" => true
*/
