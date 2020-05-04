const getDiagnoalSum = (arr) => {
    
    let n = arr.length
    let d1 = 0
    let d2 = 0
    for (let i = 0; i < n; i++){
        d1 += arr[i][i]
        d2 += arr[i][n-i-1]
    }
    return(d1 - d2)
}

var arr = [[1, 2, 3], [1, 2, 3], [1, 1, 1]]

console.log(getDiagnoalSum(arr));