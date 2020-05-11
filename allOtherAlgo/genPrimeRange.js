// Write a program to generate Prime Numbers less than N and Generate ‘N’ Prime Numbers/in given range.
const readlineSync = require('readline-sync');

const isPrime = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 == 0 || n % 3 == 0) return false;
  for (var i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }
  return true;
};

const genPrimeRange = (n) => {
  let primeArr = [];
  for (var i = 0; i < n; i++) {
    if (isPrime(i)) {
      primeArr.push(i);
    }
  }
  console.log(primeArr);
};

var ans = readlineSync.question(
  "Do you want to find the Prime Number and  numbers till that 'yes' or 'no':",
);

const question = () => {
  if (ans === 'yes') {
    var inputNum = readlineSync.question(
      'Please provide the number for the prime:',
    );
    var newNum = /^[0-9]+$/;

    if (inputNum.valueOf(inputNum).match(newNum)) {
      genPrimeRange(inputNum);

      var ans2 = readlineSync.question(
        "Do you want to find the Prime Number and  numbers till that 'yes' or 'no':",
      );

      if (ans2 === 'yes') {
        question();
      } else {
        console.log('Hope you have got the ans :🔥 🔥');
      }
    } else {
      console.log('please provide the Valid input');
    }
  } else {
    console.log('Thanks will not get the prime range');
  }
};

question();
