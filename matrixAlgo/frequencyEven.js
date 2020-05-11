// Write a Program to check the frequency(count) of odd numbers and even numbers in matrix

const findFreq = (a) => {
    let even = 0, odd = 0, n = a.length
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            if ((a[i][j]%2) ==0) {
                ++even
            } else {
                ++odd
            }
        }
    }

    console.log(`The even number in the matrix are : ${even}`);
    console.log(`The odd number in the matrix are : ${odd}`);

}

let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 17], [13, 14, 15, 16]]
findFreq(arr)