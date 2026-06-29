
import * as fs from 'fs';
console.log('choo choo!');

const words = ['dog', 'cat', 'wizard', 'phantom'];
const output = words.join('\n');
fs.writeFile('words.txt', output, fileWritten);

function fileWritten() {
    console.log('---FILE WRITTEN SUCCESSFULLY---');
}