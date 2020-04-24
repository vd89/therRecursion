const prime = require("./prime");

const getRanPrime = (min, max) => {
  var randPrime = Math.floor(Math.random() * (max - min)) + min;
  do {
    var result = prime.isPrime(randPrime);
    return randPrime;
  } while (result == true);
};

// step 1 to get the random numbers
var newRandPrime = getRanPrime(1024, 4096);
var newRandQPrime = getRanPrime(1024, 4096);
console.log(newRandPrime);
console.log(newRandQPrime);

// Step 2 to get the public Key

// let n = p * q  for n=newValu

let newN = newRandPrime * newRandQPrime;
console.log(newN);
const gcd = (a, b) => {
  var temp;
  while (1) {
    temp = a % b;
    if (temp == 0) return b;
    a = b;
    b = temp;
  }
};

let e = 2;
let k = 2;

let newPhi = (newRandPrime - 1) * (newRandQPrime - 1);
console.log(newPhi);
while (e < newPhi) {
  if (gcd(e, newPhi) == 1) {
    break;
  } else {
    e++;
  }
//   console.log(e); 
}
