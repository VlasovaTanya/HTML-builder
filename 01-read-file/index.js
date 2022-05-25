
const path = require('path');
const fs = require('fs');

const { createReadStream } = require('fs');
filePath = path.join(__dirname, './text.txt')
const stream = createReadStream(filePath);
stream.on('data', chunk => console.log(chunk.toString()));
