// Write An Algorithm using Javascript to Reverse Array Elements without using Built in Function, ​ with using temp array?

const reverArr = (arr) => {
    let newArr = []
    var i = arr.length - 1
    
    for (i; i >= 0; i--){
        newArr.push(arr[i])
    }
   console.log(newArr);
}

let arr = [1, 2, 3, 4, 5, 6, 7]
reverArr(arr) // [7,6,5,4,3,2,1]
