// Write a program to given input Check whether Even or odd.

const evenOdd = (n) => {
        if (n >= 0 && n%2 == 0) {
            return `The given ${n} is an Even no`
        } else 
            return `The given ${n} is an Odd no`
    }

console.log(evenOdd(0));   //  The given 15 is an Even no
    
console.log(evenOdd(15));   //  The given 15 is an Odd no

console.log(evenOdd(16));   // The given 16 is an Even no