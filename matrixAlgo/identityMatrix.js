const toGenIdentity = (n) => {
    let row, col
    for (row = 0; row < n; row++){
        var arr=[]
        for (col = 0; col < n; col++){
            if (row == col) {
                arr.push(`1`)
            } else {
               arr.push(`0`)
            }
        }
      console.log(arr);
    }
    return
}

toGenIdentity(4)

// to check the given square matrix is a identity or not 

const toCheckIdentity = (a) => {
    let n = a.length
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n;j++){
            if (i == j && a[i][j] !== 1) {
                return false
            } else if (i !== j && a[i][j] !== 0) {
                return false
            }
        }
    }
    return true    
}

let arr = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]

console.log(toCheckIdentity(arr));