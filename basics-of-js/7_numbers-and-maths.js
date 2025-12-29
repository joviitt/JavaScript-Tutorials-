const score =400

const newScore = new Number(100) // this is a way of explicitly declaring a number

// console.log(score);
// console.log(newScore);

// console.log(newScore.toString());//converting number to string
// console.log(typeof newScore);

// console.log(score.toFixed(2)); //digits after the decimal point, returns a string

const otherNumber = 23.6186385

// console.log(otherNumber.toPrecision(3)) // returns the closest whole number whose length is 2

// console.log(Number.MAX_VALUE) // returns max possible value of number

const hundreds = 1000000
// console.log(hundreds.toLocaleString("en")) // converts number to specified format, makes it easy to read when you num contains
// a lot of zeroes

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MATH

// console.log(Math)
// console.log(Math.PI) // returns value of pi

// console.log(Math.abs(-4)); // converts negative value to positive value
// console.log(Math.round(4.3)); // round of to nearest whole number
// console.log(Math.ceil(4.3)); // rounds of to the next highest whole number
// console.log(Math.floor(4.9)); // rounds of to the previous whole number

// usually we only use round method

// console.log(Math.sqrt(25)); // returns square root of the given argument

// console.log(Math.pow(5,2)); // 5 raised to 2

// console.log(Math.min(2,3,4,5,65)) // returns min value from the given nums
// console.log(Math.max(2,3,4,5,65)) // returns max value from the given nums

// most important function is random

console.log(Math.random()) // returns a random value between 0 and 1
console.log(Math.random()*10) // for numbers between 0 and 10

console.log(((Math.random()*10))+1) // ensures 0.04 cases are handled so that 0 is skipped
console.log(Math.floor((Math.random()*10))+1)

const min = 10
const max = 20

console.log((Math.floor(Math.random()*(max-min+1)))+min)
//this is a formula to generate random numbers between min and max . useful for decision making games .






