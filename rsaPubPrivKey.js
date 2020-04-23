// const prime = require('./prime');
const isPrime = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 == 0 || n % 3 == 0) return false;
  for (var i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }
  return true;
};

const getRanPrime = (min, max) => {
  var randPrime = Math.floor(Math.random() * (max - min)) + min;
  do {
    var result = isPrime(randPrime)
    return randPrime;
  } while (result == true);
};

// step 1 to get the random numbers 
var newRandPrime = getRanPrime(512, 1024);
var newRandQPrime = getRanPrime(512, 1024);
console.log(newRandPrime);
console.log(newRandQPrime);

// Step 2 to get the public Key 

// let n = p * q  for n=newValu

let newVal = newRandPrime * newRandQPrime
console.log(newVal);
const gcd = (a,b) => {
    var temp 
    while (1) {
        temp =a%b
        if (temp == 0)
            return b
        a = b
        b = temp
        
    }
}

let e = 2
let k = 2

let newPhi = (newRandPrime - 1) * (newRandQPrime - 1)
console.log(newPhi);
while (e < newPhi) {
    if (gcd(e,newPhi) == 1) {
        break
    } else {
        e++
    }
    console.log(e);
}