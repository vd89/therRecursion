// Write an algorithm to compute log(n)
const readlineSync = require('readline-sync')

const num = readlineSync.question("Please provide the no to check the log value : ")
const bas = readlineSync.question("please provide the base value : ")

const log2n = (n,b) => {
  return (n > b-1 )? 1 + log2n(n / b,b) : 0;
};

console.log(log2n(num,bas));



