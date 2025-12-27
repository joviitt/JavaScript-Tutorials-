/*

    Data types, on the basis of how they are stored and accessed, can be categorized into 2 parts(officially):

    1. Primitive
    2. Non-Primitive

    1.Primitive DT:
    - they are usuallly call by value(meaning a copy of the actual value is returned and any change to the copy does not
        affect the original value)

        usually 7 Types: String, Number(decimal also comes under number), Boolean, Null(empty), Undefined, Symbol,
         ,BigInt(very big int values)
        - 0 and null are different
    
    2.Reference DT(Non Primitive):
    - they are usually call by reference meaning their original value is called from memory. it receives the address of the
        variable instead of a copy. you can directly modify the original value

        TYPES: Array, Object, Function
        typeof() for these datatypes usually returns Object except for function(returns Function)

*/

let userIn; // type of userIn is undefined

// symbol declaration

const id = Symbol('1234')
const id2 = Symbol('1234')

// even if both symbol have the same value(eg string or number), the value which is returned would be different. 
// symbol is used to make an element unique.

console.log(id === id2); // returns False

const bigNumber = 34n
// n is used to denote bigint
console.log(typeof bigNumber);

let myObj = {
    name: "jovit",
    age: 21
} // object

let movies = ["21 jump street", "22 jump street"] // array

// console.log(typeof movies);  returns object


let myFunction = Function()
{
    console.log("Hello World")
} // function

myFunction()






