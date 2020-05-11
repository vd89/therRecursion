// matrix trace of given matrix

const matrixTrace = (params) => {
    const matLeng = params.length 
    let result = 0
    for (let i = 0; i < matLeng; i++){
        result += params[i][i]
        
    }
    return result
}

console.log(matrixTrace([[1,2,3,4],[4,5,6,7],[8,9,10,11]])); //16


// Matrix normal of size n x n 

const matrixNormal = (params) => {
    let sum = 0 
    let matLeng = params.length

    for (let i = 0; i < matLeng;i++){
        for (let j = 0; j < matLeng; j++){
            sum += params[i][j]*params[i][j]
        }
    }
    return Math.sqrt(sum)
}
console.log(matrixNormal([[1,2,3,4],[4,5,6,7],[8,9,10,11]])); //18.33030277982336