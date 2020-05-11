//  algorithms to perform binary addition subtraction without using built in methods

const binAdd = (a, b) => {
    console.log(a);
  while (b !== 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  console.log(a,b);
};
let num = 15;
let num2 = 30;

binAdd(num,num2);
