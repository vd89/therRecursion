// Write An Algorithm using Javascript finding Perfect Square Root of a Number without using Built in Function


const squareRoot = (n) => {
    if (n ==0 || n == 1) {
        console.log(`The number is not a valid for square root : ${n}`);
    } else {
        let i = 1, result = 1
        while (result<=n) {
            i++
            result = i * i
        }
        console.log(i-1);
    }
}

squareRoot(25)

