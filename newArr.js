/*

Given nums = [1,1,2],
Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the returned length.

*/

const toGetLength = (array) => {
    array.sort()
    let x = {};
    array.forEach(function (i) {
        if (!x[i]) {
            x[i] = true
        }
    })
    console.log(Object.keys(x).length);
}

let nums = [0, 1, 2, 0, 1, 1, 1, 2, 2, 3, 3, 4]

const toGetNewLength = (array) => {
    array.sort()
    console.log(array);
    let temp = [], j = 0
    for (let i = 0; i < array.length - 1;i++){
        if (array[i]!== array[i+1]) {
            temp[j++] = array[i]
        }
    }
    temp[j++] = array[array.length - 1]
    console.log(temp); 
    console.log(temp.length);
}
toGetNewLength(nums)


toGetLength(nums)