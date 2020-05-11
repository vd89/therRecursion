// Write a program to add two integers without using Add (+) operator

const add = (x,y) => {
    if (y == 0) {
        return x 
    } else {
        return add(x ^ y, (x & y) << 1)
        
    }
}

const summation = (x,y) => {
    return `The Addition of given no ${x} and ${y} is ${add(x,y)}`
}


console.log(summation(10, 15)); // The Addition of given no 10 and 15 is 25
