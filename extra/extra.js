dOA(() => {
    dOB()
    doC(() => {
        doD()
    })
    doE()
})
doF()

setTimeout(() => {
    console.log('Second');
}, 0)
console.log('first');