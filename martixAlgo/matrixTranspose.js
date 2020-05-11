// Matrix transpose



const transpose = (arr) => {
    let result = new Array(arr[0].length)
    for (let i = 0; i < result.length; i++){
        result[i] = new Array(arr.length)
        for (let j = 0; j < result[i].length; j++){
            result[i][j] = arr[j][i]
        }
    }
    return result
}



console.log(transpose([[1, 2, 3, 4], [4, 5, 7, 8]]));
console.log(transpose([[1,1,1,1,],[2,2,2,2],[3,3,3,3]]));