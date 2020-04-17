// Write a program to Check Whether the given year is a leap year or not

const readlineSync = require('readline-sync');

let year = readlineSync.question("Provide the year that you want to check for the leap year : ")

const leapYear = (n) => {
    return n %4 ===0 ? `${n} is Leap ` : `Year is not Leap year ${n}`
}

console.log(leapYear(year));