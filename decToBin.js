// Write a program to Convert Decimal to Binary
const readlineSync = require('readline-sync');

const num = readlineSync.question("Give the Decimal no to convet to binary : ")

const toBinary = (n, bin = '') => {
  if (n <= 1) {
    bin = n + bin;
    const ofZero = 8 - bin.length;
    for (let i = 0; i < ofZero; i++) {
      bin = '0' + bin;
    }
    return bin;
  } else {
    bin = Math.floor(n % 2) + bin;
    return toBinary(Math.floor(n / 2), bin);
  }
};


const toBin = (n) => {
      let remArr = [];
      let resArr = [];
      if (n >= 0) {
        while (n) {
          let q = parseInt(n / 2);
          remArr.push(n % 2);
          n = q;
        }
        for (let i = remArr.length; i >= 0; i--) {
          resArr.push(remArr[i]);
          if (resArr[0] == undefined) {
            resArr.shift();
            resArr.unshift(0);
          }
        }
        return resArr.join('');
      } else {
        return;
      }

}

console.log(toBinary(num));
console.log(toBin(num));