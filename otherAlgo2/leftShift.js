// Write a program using Left Shift Operator (6<<i = 6*2^i) and Derive the General Formula

const leftShift = (n, m) => {
  // m is the shift and n is given number
  let o = n << m;
  let p = n * 2 ** m;

  if (o == p) {
    console.log(
      `The general formula for left shift is n*(2^m) hence ${o} == ${p}`,
    );
  } else {
    console.log(`The given general formula is false`);
  }
};
let a = 15;
let b = 10;

leftShift(a, b); //The general formula for left shift is n*(2^m) hence 15360 == 15360

// Write a program using Right Shift Operator (6>>i = 6/2**i) and Derive the General Formula

const rightShift = (n, m) => {
  // m is the shift and n is given number
  let o = n >> m;
  let p = parseInt(n / 2 ** m);
  if (o == p) {
    console.log(
      `The general formula for left shift is n*(2^m) hence ${o} == ${p}`,
    );
  } else {
    console.log(`The given general formula is false`);
  }
};

let c = 15,
  d = 2;
rightShift(c, d);
