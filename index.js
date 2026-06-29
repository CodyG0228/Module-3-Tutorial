import * as fs from 'fs';
import * as cowsay from 'cowsay';

const words = ['dog', 'cat', 'wizard', 'phantom'];
const output = words.join('\n');
fs.writeFile('words.txt', output, fileWritten);

function fileWritten() {
    console.log('---FILE WRITTEN SUCCESSFULLY---');
}
