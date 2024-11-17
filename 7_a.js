const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

async function readFiles() {
  try {
   
    const [data1, data2, data3] = await Promise.all([
      readFile('file1.txt', 'utf8'),
      readFile('file2.txt', 'utf8'),
      readFile('file3.txt', 'utf8')
    ]);

    console.log('File 1 Content:', data1);
    console.log('File 2 Content:', data2);
    console.log('File 3 Content:', data3);
  } catch (err) {
    console.error('Error reading files:', err);
  }
}

// Execute the async function
readFiles();
