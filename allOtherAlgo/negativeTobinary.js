// Write a program to Convert Negative Decimal Number to Binary(2’s Complement)

// To get the 32 bit binary 

const negToBin = (n) => {
    let binary = (n >>> 0).toString(2)
    console.log(binary);
    return binary
   
}

let num = -55
negToBin(num)

const binToDecima = (n) => {
    let dec = parseInt(n, 2) >> 0
    return dec
}

console.log(binToDecima(negToBin(num)));



// Positive to binary
const decToBin = (n) => {
    let binary = n.toString(2)
    console.log(binary);
}
let posNum = 55
decToBin(posNum)