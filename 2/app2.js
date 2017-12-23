//this is an OBJECT with properties // methods // associated with it
let stuff = require('./app')

let x = [1,2]

//we call the object, and use . to call the method / variable that's in it
stuff.count(x)

console.log(stuff.pi)

console.log(stuff.t(5,7))

//we can use imported variables within imported functions
console.log(stuff.t(stuff.pi,8))
