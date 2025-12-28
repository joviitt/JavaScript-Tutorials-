/*

two types of memory:

    1. Stack(primitive)
    2.Heap(non-primitive)

*/
//stack implementation and working example
let channelName = "jovitJohn"
let anotherName = channelName

anotherName = "jojo"

console.log(anotherName);
console.log(channelName);
// here anotherName references a local copy of channelName and not the actual value and that is why the og value is the same
//  even when anotherName is changed

// heap implementation and working 

let userOne = {
    email: "user@gmail.com",
    password: "12345"
}

let userTwo = userOne
userTwo.email = "jovit@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
// here userone and usertwo both refer to the same object in heap memory. thats why any change to usertwo is reflected in
//  userone as well
