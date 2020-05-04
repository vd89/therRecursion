function filter(...args) {
    return args.filter((e) => e % 2 == 0)
}
console.log(filter(1, 2, 3, 4, 5, 6, 7, 8, 9, 0))
function double(...args) {
    return args.forEach((e) => console.log(e * 2))
}
double(1, 3, 5, 7, 9, 2, 4, 6, 8)
function map(...args) {
    return args.map((e) => {
        console.log(e)
    })
}
map(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)
function reduce(...args) {
    return args.reduce((a, b) => {
        console.log(a);
        return a + b
    })
}
console.log(reduce(1, 2, 3, 4, 5, 6))