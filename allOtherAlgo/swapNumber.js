// Write An Algorithm using Javascript to swap two numbers using temporary variables, using arithmetic operators, using logical operators?(Swapping should be done using 5 methods)

const method1 = (n, m) => {
  let t = n;
  n = m;
  m = t;
  console.log(n, m); // 5,4
};
method1(4, 5);

const method2 = (n, m) => {
  n = n + m;
  m = n - m;
  n = n - m;
  console.log(n, m); // 7,6
};
method2(6, 7);

const method3 = (n, m) => {
  n = n * m;
  m = n / m;
  n = n / m;
  console.log(n, m); // 9,8
};
method3(8, 9);

const method4 = (n, m) => {
  n = n ^ m;
  m = n ^ m;
  n = n ^ m;
  console.log(n, m); // 6,5
};
method4(5, 6);

const method5 = (n, m) => {
  n = ~(n ^ m);
  m = ~(n ^ m);
  n = ~(n ^ m);
  console.log(n, m); // 9,7
};
method5(7, 9);
