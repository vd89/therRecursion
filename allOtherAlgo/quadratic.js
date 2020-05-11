// Write a program to find the roots of a quadratic equation

const readlineSync = require('readline-sync');

let a = readlineSync.question("Please provide the first number a : ")
console.log(a);
let b = readlineSync.question("Please provide the second number b : ")
console.log(b);
let c = readlineSync.question('Please provide the third number c : ');
console.log(c);


const getQuadatic = (a,b,c) => {
    
    const rootParts = Math.floor(b * b - 4 * a * c)
    const denom = 2 * a
    const root1 = (-b + rootParts) / denom
    const root2 = (-b - rootParts) / denom
   
    return [root1,root2]
    
}
console.log(`ax^2 + bx + c = ${getQuadatic(a, b, c)}`);
// console.log(getQuadatic(a,b,c));