// Write a program to generate Prime Numbers less than N and Generate ‘N’ Prime Numbers/in given range.

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
    let primeArr = []
    for (var i = 0; i < n; i++){
        if (isPrime(i)) {
            primeArr.push(i)
        }        
    }
    return primeArr
}
console.log(genPrimeRange(15)); // [ 2, 3, 5, 7, 11, 13 ]

console.log(genPrimeRange(50)); // [2, 3, 5, 7, 11, 13,17, 19, 23, 29, 31, 37,41, 43, 47 ]