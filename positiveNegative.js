// Write a program to check whether a number is a positive number or negative number ?

const readlineSync = require('readline-sync');

let num = readlineSync.question("Provide the number to check : ")

const isPositive = (num) => {
    return num > 0 ? `The ${num} is positive number ` : `The ${num} is nagative number`
}

console.log(isPositive(num));