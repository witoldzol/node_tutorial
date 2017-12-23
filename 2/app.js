
//let count = (arr) => {console.log(arr.length)}
//module.exports.count = count

let pi = 3.413

//ecma 6 evaluation without concatonation of the string with variables ... amazing!
let t = (a,b) => {return `sum of the arguments passed is ${a+b}`}


//export vars / methods that we want available on import

module.exports.pi = pi
module.exports.t = t


//you can save on typing / code and export directly when defining functions / variables
module.exports.count = (arr) => (console.log(arr.length))


//FINALLY you can use object literals to export

/*

module.exports = {
 
    pi : pi,
    t : t,

}

*/
