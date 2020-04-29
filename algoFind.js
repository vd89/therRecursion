/*
Problem 1 : Given an array of positive integer elements.Print out the count of Prime
numbers and Narcissistic numbers from the array and remove those elements from the
array.
Sample Input 1 :
10,20,30,40,2,5,7,153,1024,1634,11
Expected Output format :
Prime Numbers Count : 4
Narcissistic Numbers Count : 5
The updated array : 10,20,30,40,1024
*/

const isPrime = require('./prime');
const armStrongNum = require('./armStrongNum');
const findPrimeNarciss = (num) => {
  let primArr = [];
  let narcArr = [];
  num.forEach((item) => {
    if (armStrongNum(item)) {
      narcArr.push(item)
      num.slice(item)
      console.log(narcArr);
    }else if (isPrime(item)) {
      primArr.push(item)
      num.slice(item)
    }
  });
  
  return num
};
let num = [10, 20, 30, 40, 2, 5, 7, 153, 1024, 1634, 11];
console.log(findPrimeNarciss(num));
