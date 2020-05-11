// Write a program to check whether given character is vowel or consonant


const checkVowel = (p) => {
    if (p == "a" || p == "A"||
        p == "e" || p == "E" ||
        p == "i" || p == "I" ||
        p == "o" || p == "O" ||
        p == "u" || p == "U" ) {
        return `The given character ${p} is  Vowel `
    } else {
        return `The given character ${p} is Consonant`
    }
}

console.log(checkVowel("a")); // The given character a is  Vowel 

console.log(checkVowel("C")) // The given character C is Consonant