// Write a program to find power of a number using recursion

const readlineSync = require('readline-sync');

let num = readlineSync.question("Provide the base number : ")
let exp = readlineSync.question("Provide the exponent to check : ")

const findPower = (b,e) => {
    if (e <= 1) {
        return b        
    }
    return b * findPower(b,e-1)
}
console.log(findPower(num,exp));