// Write a program to Generate Even and Odd Number less than N and Generate ‘N’ Even and Odd Numbers.

const odd = (n) => {
    let oddArr =[]
    for (let i = 1; i < n; i++) {
        if (i % 2 !== 0) {
            oddArr.push(i)
        }
    }
    return oddArr
}
 
const even = (n) => {
    let evenArr= []
    for (let i = 1; i < n; i++) {
        if (i % 2 === 0) {

         evenArr.push(i);
        }
    }
    return evenArr
}


const genEvenOdd = (params,n) => {
    if (params === even) {
        return even(n)
    }
    if (params === odd) {
        return odd(n)
    } else {
        return `Please give odd or Even`
    }

}

console.log(genEvenOdd(odd, 9)); // [ 1, 3, 5, 7 ]

console.log(genEvenOdd(even, 10)); // [ 2, 4, 6, 8 ]