//Array.map with rest and spread
var total ={}
sum = (...arr) => {
    arr.map((value) => {
        
        total = total+ value
    
        
    })
    console.log( {total} )
}
var num = [[1, 2, 3, 4], [5, 6, 7, 8, 9]]

sum(num);