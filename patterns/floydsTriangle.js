// Write a program to print Floyd’s triangle as shown below for given N lines:


const floydsTriangle = (n) => {
    let num = 0
    for (let i = 0; i < n; i++){
        let string = ""
        for (let x = 0; x < i; x++){
            num += 1
            string += " "+num
        }
        console.log(string);
    }
}

floydsTriangle(7)

/*


 1
 2 3
 4 5 6
 7 8 9 10
 11 12 13 14 15
 16 17 18 19 20 21

 */