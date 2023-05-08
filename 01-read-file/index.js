const fs = require('fs');
const path = require('path');

const readableStream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');

//console.log(path.resolve('01-read-file', 'text.txt'));

readableStream.on('data', chunk => console.log(chunk));