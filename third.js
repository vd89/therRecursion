//Direct Recursion

function directRec(n) {
    if (n< 1) {
        return n
    } else {
        console.log(n +1);
        console.log(n - 1);
        console.log(n);
    }
    return console.log(n , n -1, n+1) ;
  
}

console.log(directRec(5));