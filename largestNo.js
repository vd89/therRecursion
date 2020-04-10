// Write a program to find the largest number among three numbers

const largeNum = (a,b,c) => {
    
    if (a >= b && a >= c) {
        return `${a} is the largest number`
    } else if (b>=a && b >= c) {
        return `${b} is the largest number`
    } else {
        return `${c} is the largest number`
    }
}

console.log(largeNum(15, 26, 38)); //38 is the largest number
console.log(largeNum(98, 22, 17)); // 98 is the largest number
console.log(largeNum(18, 77, 52)); // 77 is the largest number
