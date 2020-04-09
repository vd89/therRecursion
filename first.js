// Factorial value using the loop and the recursive method

//First Loop 

function factorialLoop(n) {
    var fact = 1
    for (let i = 1; i <= n; i++) {
        fact = fact * i 
    }
    return console.log(fact);
}

factorialLoop(5) // 120

// Recurrence 

function factorialRec(n) {
    if (n == 0) {
        return 1
    } else {
        return n * factorialRec(n -1)
    }
}

console.log(factorialRec(5)); // 120