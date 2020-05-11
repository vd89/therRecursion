// Write a program to add,subtract and multiple of given (NXN) Matrices


const matrixOper = (arr1,arr2,oper) => {
    const n = arr1.length
    let result = []
    let operation = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '*': (num1, num2) => num1 * num2,
        
    }

    for (let row = 0; row < n; row++){
        for (let col = 0; col < n; col++){
            result.push(operation[oper](arr1[row][col], arr2[row][col]))
        }
    }
    return result
}

console.log(matrixOper([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]], '+'));

console.log(matrixOper([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]], '-')) // [0, 0, 0, 0, 0, 0, 0, 0, 0]
console.log(matrixOper([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]], '*')) // [1, 4, 9, 16, 25, 36, 49, 64, 81]