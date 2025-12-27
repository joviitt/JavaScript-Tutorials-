/*
BASIC COMPARISONS:

console.log(2<1)
console.log(2==1)
console.log(2!=1)
console.log(2<=1)
console.log(2>=1)
console.log(2>1)
*/

// console.log("2"<2); //false
// console.log("02"<3); // true

//typescript doesnt allow comparisons between diff data types. js allows that

// console.log(null > 0); // false
// console.log(null >= 0); // true
// console.log(null == 0); // false

// the equality check(==) and comparison op(<,>,<=,>=) work differently. sometimes null is converted to NaN ans sometimes
// it is converted to 0 that is why the middle statement above returns true

// console.log(undefined == null); //true
// console.log(undefined > 0); //false
// console.log(undefined == 0); //false
// console.log(undefined <= 0); //false

console.log("2"=== 2); // === is the strict check op. it also checks for the datatype of the operands
console.log("2"=== "2");
console.log("2"=== "3"); 





