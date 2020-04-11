

// Swapping arry when the elements are not equal to each other 

const swapping = (arry1, arry2) => {
    if (arry1.length <= arry2.length) {
        let arr = arry2.length
        for (var i = 0; i < arr; i++) {
            arry1[i] = arry1[i] ^ arry2[i];
            arry2[i] = arry1[i] ^ arry2[i];
            arry1[i] = arry1[i] ^ arry2[i];
        }
        console.log(arry1);
        console.log(arry2);

    } else {
        let arr = arry1.length
        for (var i = 0; i < arr; i++) {
            arry1[i] = arry1[i] ^ arry2[i];
            arry2[i] = arry1[i] ^ arry2[i];
            arry1[i] = arry1[i] ^ arry2[i];
        }

        console.log(arry1);
        console.log(arry2);
    }
}

var a = [1, 2, 3, 4]
var b = [10, 9, 8, 7, 6, 5]

console.log(swapping(a, b)); // a = [ 1, 2, 3, 4, 0, 0 ] b = [10, 9, 8, 7, 6, 5]

console.log(swapping(a, b)) // a = [ 10, 9, 8, 7, 6, 5 ] b = [ 1, 2, 3, 4, 0, 0 ]