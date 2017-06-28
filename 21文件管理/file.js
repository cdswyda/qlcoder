let fs = require('fs');
let glob = require('glob');

glob("./root/**/*.txt", function (er, files) {
    let maxFile = '';
    let maxSize = 0;
    let currSize = 0;
    files.forEach(function (file) {
        currSize = fs.statSync(file).size;
        if (currSize > maxSize) {
            maxSize = currSize;
            maxFile = file;
        }
    });
    fs.readFile(maxFile, function (err, data) {
        console.log('This answer is in ' + maxFile + '\nThe answer is ' + data.toString());
    });
});