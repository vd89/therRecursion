 // Write a program check whether given character is an alphabet or not

const readlineSync = require('readline-sync');

let char = readlineSync.question("Provide the character : ")

const isAlphabet = (ch) => {
    if (ch.lenght > 1) {
        return "Just one alphabet"        
    } 
        const chCode = ch.charCodeAt(0)

        if ((chCode>=65 && chCode<=90) || (chCode>=97 && chCode<=122)) {
            return "is an Alpabet"
        }
        return "Not an Alphabet"
}
console.log(isAlphabet(char));