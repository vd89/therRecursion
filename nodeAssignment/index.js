const fs = require('fs');

const file = process.argv.splice(2)

file.forEach(file => {
    fs.readFile(file, (err, data) => {
       if (err) {
           throw err
       } else {
           const fileData = data.toString()
           const line = fileData.split('\n')
           const word = fileData.split(' ')
           const chars = fileData.replace(/[\n]+/gm, "").split('')
           console.log(`The number of lines in ${file} are ${line.length}`);
           console.log(`The number of Words in ${file} are ${word.length}`);
           console.log(`The number of characters in ${file} are ${chars.length}`);
           console.log('\n');

       }
    })
})


// to call this     node index.js first.txt 
// to call this     node index.js second.txt 