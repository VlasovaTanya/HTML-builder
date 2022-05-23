
const path = require('path');
const fs = require('fs');
filePath = path.join(__dirname, './text.txt')
fs.readFile (filePath, 'utf8', function(err, data) {
    
    if (err) throw err;
    console.log(data)
})
