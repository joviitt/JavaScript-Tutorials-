let name = "jovit"
let repoCount = 11

//console.log(name + repoCount + "Value"); // this syntax is an outdated way of writing strings 

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//nowadays we use this syntax which is called string interpolation where we enclose the entire string within backticks.
// it is more efficient and we can use and update the variables easily

const gameName = new String("joel-outrage") // another method of initializing a string where we use js objects using new keyword

// some string methods

console.log(gameName.endsWith("e"))

console.log(gameName[0]) // string is an object

console.log(gameName.__pronto__)

console.log(gameName.length)

console.log(gameName.toUpperCase())

console.log(gameName.charAt(4)) // returns character at the index 4

console.log(gameName.indexOf('o')); // returns first occurrence of the character o

let newGameName = gameName.substring(0,4)
console.log(newGameName); // we can not use negative values is substring

let anotherGameName = gameName.slice(-11,4)
console.log(anotherGameName);
/* for slice (start,end) is the syntax where:(we can use negative values in slice)
    if -arr.length<=start<0 then arr.length+start is used as the starting index
    if -arr.length<=end<0 then arr.length+end is used as the ending index
*/

const newString = "    jovit    jovit"
console.log(newString);
console.log(newString.trim());  // removes all the whitespaces in the string

console.log(newString.replace('jovit','joel')) // REPLACE replaces the first occurrence of the first string with the second string


console.log(newString.replaceAll('jovit','joel'))  //// replaceAll replaces all the occurrences of the first string with the second string


console.log(gameName.split("-")) // splits the string into an array of strings based on the separator