// Write a program to Convert Decimal to Binary
// const readlineSync = require('readline-sync');

// const num = readlineSync.question("Give the Decimal no to convet to binary : ")

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

var num = 98
var bin = toBin(num)
console.log(toBinary(num));
console.log(toBin(num));


// Binary to decimal 

const binDec = (n) => {
  
  var dec = parseInt(n, 2)

  return dec
}
let dec = binDec(bin)
console.log(dec);


function binaryToDecimal(string) {
  let decimal = +0;
  let bits = +1;
  for (let i = 0; i < string.length; i++) {
    let currNum = +(string[string.length - i - 1]);
    if (currNum === 1) {
      decimal += bits;
    }
    bits *= 2;
  }
 return decimal
}

let decimal2 = binaryToDecimal(bin)
console.log(decimal2);