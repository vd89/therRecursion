// Write a program to find the Sum of Array Elements.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = arr.reduce((a,b)=>{return a + b},0)

console.log(sum); // 55


// Write a program for swapping of two arrays


var a = [1, 2, 3, 4, 5]
var b = [6, 7, 8, 9, 10]
    
for (var i = 0; i < b.length; i++) {
    a[i] = a[i] ^ b[i];
    b[i] = a[i] ^ b[i];
    a[i] = a[i] ^ b[i];
}
console.log(a); // [ 6, 7, 8, 9, 10 ]
console.log(b); // [ 1, 2, 3, 4, 5 ]