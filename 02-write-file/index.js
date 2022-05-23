const path = require('path');
const fs = require('fs');
filePath = path.join(__dirname, './text.txt')

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const WriteStream = fs.createWriteStream(filePath);
const rl = readline.createInterface({ input, output });


rl.question('enter your name(or exit): ', (text) => {
  if (text === 'exit'){
    console.log('file text.txt is empty');
    rl.close();
  } else {
    WriteStream.write(`${text}`);
    console.log('enter your last name(or exit)');
    rl.on('line', (text_) => {
      if (text_ === 'exit'){
        console.log('the end,results: text.txt');
        rl.close();
      } else {
        WriteStream.write(`\n${text_}`);
      }
    });
  }
});
rl.on('SIGINT', () => {
    console.log('\nthe end, results: text.txt');
    rl.close();
  });

  
  