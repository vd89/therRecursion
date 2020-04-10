// Write a program to decide given N is Prime or not.

const isPrime = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 == 0 || n % 3 == 0) return false;
  for (var i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }
  return true;
};

console.log(isPrime(19)); // true

console.log(isPrime(5)); // true

console.log(isPrime(4)); // false
