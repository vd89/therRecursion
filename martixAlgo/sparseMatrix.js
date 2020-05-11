//Write a program to accept a matrix and determine whether it is a sparse matrix or not?. A sparse matrix is a matrix, which has more zero elements than nonzero elements.

const chechSparse = (arr) => {
  let n = arr.length,
    count = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (arr[i][j] == 0) {
        ++count;
      }
    }
  }
  if (count > (n * n) / 2) {
    console.log(`The given matrix is a spare Matrix and the count is ${count}`);
  } else {
    console.log(`The given matrix is not a spare matrix and count is ${count}`);
  }
  count;
};

let a = [
  [1, 2, 3],
  [0, 7, 5],
  [6, 0, 0],
];
chechSparse(a)
