// Fibonacci Sequence with the loop and Recursive

// Loop method 

function fibonacciLoop(n) {
    let fibArray = [0, 1], i = 0, j = 1
    for (let k = 0; k < n; k++) {        
        let x = i + j;
        i = j
        j = x
        fibArray.push(x);
    }
    console.log(fibArray);
}
fibonacciLoop(10) // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

// Recursive method 

function fibonacciRec(n) {
    if (n == 0) return [0]
    if (n == 1) return [0, 1]
    const arr = fibonacciRec(n - 1)
    return [...arr, arr[n - 1] + arr[n - 2]]
}


console.log(fibonacciRec(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
