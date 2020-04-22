const isPrime = require('./prime');

// const isPrime = (n) => {
//     if (n <= 1) return false;
//     if (n <= 3) return true;

//     if (n % 2 == 0 || n % 3 == 0) return false;
//     for (var i = 5; i * i <= n; i = i + 6) {
//         if (n % i == 0 || n % (i + 2) == 0) return false;
//     }
//     return true;
// };


//  isPrime = require('./prime');
// console.log(randPrime);

const getRanPrime = (min, max) => {
    var randPrime = Math.floor(Math.random() * (max - min)) + min
    do {
        var result = isPrime(randPrime)
        return randPrime
    } while (result == true);
}
var newRandPrime = getRanPrime(512, 1024)
console.log(newRandPrime);