let value = 33
let negValue = -value  // by using the hyphen(-) we can negate any integer value
// console.log(negValue);
// console.log(typeof negValue);

/*
BASIC OPERATIONS:

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2/2)
console.log(2%2)
*/
let num = 2+1+"3"
// console.log(num);
// console.log(typeof num)

// console.log(2+"2");
// console.log("1"+2);
// console.log("1"+2+2); // if string appears first every object will be taken as string
// console.log(1+2+"2"); // if a number appears first the numerical op is carried out first and then concatenated to the string


// console.log(+true) // output is 1
// console.log(+"") // output is 0

// the two lines of code above are not good practices because its readability is low and its confusing

let num1, num2 , num3

// num1=num2=num3=2+2 // this is also bad practice as it is confusing for other devs

num1 = 3
console.log(num1++) // this first prints the og value of num1 and then increments it ie 3
console.log(num1)  // this prints the incremented value of num1 ie 4


num2 = 3
console.log(++num2) // this increments the value of num2 first and then prints it ie 4

// the postfix increment - returns the og value and then increments it(x++)
// the prefix increment - increments the og value and then returns it(x--)

