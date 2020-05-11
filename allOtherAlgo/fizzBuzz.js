// Write a program that prints the numbers from 1 to 100 and for multiples of '3' print "Fizz" instead of the number and for the multiples of '5' print "Buzz".

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
      console.info("FizzBuzz");
    } else if (i % 3 == 0) {
      console.info("Fizz");
    } else if (i % 5 == 0) {
      console.info("Bizz");
    } else console.info(i);
  }
}

fizzBuzz()
