//Write a Program to accept two matrices and check if they are equal

const areSame = (a, b) => {
  let n = 3;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (a[i][j] !== b[i][j]) {
        var aVal = true;
      }
    }
    var aVal = false;
  }
  if (aVal == true) {
    console.log(`The given matrix is not identical`);
  } else {
    console.log(`The given matrix is Identical`);
  }
};

let arr1 = [
  [1, 2, 3],
  [4, 5,6],
  [7, 8, 9],
];
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

areSame(arr, arr1);
