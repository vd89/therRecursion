// Write a Program to add all Elements in Matrix

const sumOfElements = (arr) => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      sum += arr[i][j];
    }
  }
  console.log(sum);
};

let a = [
  [1, 2, 3],
  [4, 5, 6],
    [7, 8, 9]
];
sumOfElements(a); // 45
