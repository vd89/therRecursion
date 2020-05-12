// Write a program to print Pascal triangle as shown below for given N input lines:

  function generatePascal(n) {
        var arr = {};
        for (var row = 0; row < n; row++) {
          arr[row] = [];
          for (var col = 0; col < row + 1; col++) {
            if (col === 0 || col === row) {
              arr[row][col] = 1;
            } else {
              arr[row][col] = arr[row - 1][col - 1] + arr[row - 1][col];
            }
          }
        }
        return arr;
  }

  console.log(generatePascal(8));