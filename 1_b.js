const fs = require('fs').promises; 


async function readFiles(filePaths) {
    try {
        const fileReadPromises = filePaths.map(filePath => fs.readFile(filePath, 'utf8')); 
        const fileContents = await Promise.all(fileReadPromises); 
        return fileContents; 
    } catch (error) {
        console.error("Error reading files:", error);
        throw error;
    }
}


(async () => {
    const files = ['file1.txt', 'file2.txt', 'file3.txt']; 

    try {
        const contents = await readFiles(files);
        console.log("Contents of the files:");
        contents.forEach((content, index) => {
            console.log(`File ${index + 1}:`, content);
        });
    } catch (error) {
        console.error("Failed to read files:", error.message);
    }
})();
