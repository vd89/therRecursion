// Write a program to Generate Even and Odd Number less than N and Generate ‘N’ Even and Odd Numbers.
const readlineSync = require('readline-sync');

const odd = (n) => {
  let oddArr = [];
  for (let i = 1; i < n; i++) {
    if (i % 2 !== 0) {
      oddArr.push(i);
    }
  }
  return oddArr;
};

const even = (n) => {
  let evenArr = [];
  for (let i = 1; i < n; i++) {
    if (i % 2 === 0) {
      evenArr.push(i);
    }
  }
  return evenArr;
};

const genEvenOdd = (params, n) => {
  if (params === even) {
    return even(n);
  }
  if (params === odd) {
    return odd(n);
  } else {
    return `Please give odd or Even`;
  }
};

const question = () => {
  var ans = readlineSync.question(
    "Do you want to generate the list of even or odd numbers 'yes 👍' or 'no 👎' : ",
  );
  if (ans === 'yes') {
    var params = readlineSync.question(
      "Please provide the paramenter for the 'odd' range or for the 'even' range: ",
    );
    console.log(params);
    if (params !== even) {
      var n = readlineSync.question(
        'please provide the input number to get the range till that: ',
      );
      console.log(n);
      console.log(odd(n));
      var ans2 = readlineSync.question(
        "Do you want to get another range of output please say 'yes' or 'no'",
      );
      if (ans2 === 'yes') {
        question();
      } else {
        console.log('Hope you have got the ans :🔥 🔥');
      }
    } else {
      var n = readlineSync.question(
        'please provide the input number to get the range till that: ',
      );
      console.log(even(n));
      question();
    }
  } else {
    console.log(`Thanks of the valuable reply you might not be intrested`);
  }
};

question();
// console.log(genEvenOdd(odd, 9)); // [ 1, 3, 5, 7 ]

// console.log(genEvenOdd(even, 10)); // [ 2, 4, 6, 8 ]
