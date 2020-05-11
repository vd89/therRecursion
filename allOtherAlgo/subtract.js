// Write a program to subtract two integers without using Minus (-) operator

const subtract = (x, y) => {
  if (y === 0) {
    return x;
  } else {
    // x ^ y = The bitwise XOR assignment operator uses the binary representation of both operands, does a bitwise XOR operation on them and assigns the result to the variable.
    // ~x & y = The bitwise AND assignment operator uses the binary representation of both operands, does a bitwise AND operation on them and assigns the result to the variable.
    // (~x & y) << 1 = The left shift assignment operator moves the specified amount of bits to the left and assigns the result to the variable.
    return subtract(x ^ y, (~x & y) << 1);
  }
};

const diff = (x, y) => {
  return `The difference between ${x} , ${y} is ${subtract(x, y)}`;
};

console.log(diff(15, 10)); // The difference between 15 , 10 is 5
