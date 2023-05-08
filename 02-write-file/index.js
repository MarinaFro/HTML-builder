const fs = require('fs');

const path = require('path');

const { stdin, stdout } = process;

const writeStream = fs.createWriteStream(path.join(__dirname, 'file.txt'));

stdout.write('Привет! Давайте познакомимся?\n');

stdin.on('data', text => {
  if (text.toString().trim() == 'exit') {
    stdout.write('До скорых встреч!');
    process.exit();
  } else {
    writeStream.write(text);
  }
});

process.on('SIGINT', () => {
  stdout.write('До скорых встреч!');
  process.exit();
});