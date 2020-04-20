
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


(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();

var b = 1;
function outer() {
    var b = 2
    function inner() {
        // b++;
        var b = 3
        console.log(b)
    }
    inner();
}
outer();

// To Get Random HexDec color
const getHexDec = () => {
    var ltr = "0123456789ABCDEF"
    var color = "#"
    for (let i = 0; i < 6; i++) {
        color +=ltr[Math.floor(Math.random()*16)]        
    }
    return color
}

console.log(getHexDec());

const getBg = () => {
    const color = "#"+Math.floor(Math.random() * 16777215).toString(16)
    console.log(`${color}`);
}

getBg()


console.log(typeof(15));