
//The value of the question is important 

const a = () => {
    return {
        b:() => {
            return {
                c:() => {
                    console.log("Hello World");
                }
            }
        }
    }
}

a().b().c() // Hello World 


const toBinary = (n, bin = "") => {
     
    if (n<= 1) {
        bin = n + bin
        const ofZero = 8 - bin.length
        for (let i = 0; i < ofZero; i++){
            bin = "0" +bin
        }
        return bin
    } else {
        bin = Math.floor(n % 2) + bin
        return toBinary(Math.floor(n/2),bin)
    }
        
}

console.log(toBinary(32));

function binary(asciiValue, result = '') {
    if (asciiValue <= 1) {
        result = asciiValue + result;
        const noOfZeros = 8 - result.length;
        for (let i = 0; i < noOfZeros; i++) {
            result = '0' + result;
        }
        return result;
    } else {
        result = Math.floor(asciiValue % 2) + result;
        return binary(Math.floor(asciiValue / 2), result);
    }
}
console.log(binary(32));


// const newBin = (n) => {
//     let resArr = []
//     if (n<=1) {
        
//     }
// }