function sumAll(...args) { // args is the name for the array
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
sumAll(1); // 1
sumAll(1, 2); // 3
sumAll(1, 2, 3)
console.log(sumAll(1,15,38));