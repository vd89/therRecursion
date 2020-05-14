function sortRowMatrix(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].sort();
  }
  return arr;
}

function sortColMatrix(arr) {
  let temp = [];
  for (let j = 0; j < arr.length; j++) {
    arr.sort();
    //  temp = arr[j].sort()
  }
  return arr;
}

let a = [
  [5, 4, 8],
  [3, 5, 1],
  [9, 5, 1],
];
console.log(sortRowMatrix(a));
console.log(sortColMatrix(a));
