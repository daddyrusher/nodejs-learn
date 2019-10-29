const fs = require('fs');

//async reading

fs.readFile('input.txt', (err, data) => {
    if (err) console.log(err.stack);
    console.log("Async data: ", data.toString())
});

let data = fs.readFileSync('input.txt');
console.log("Sync data: ", data.toString());

//open file
console.log("Going to open file!");
fs.open('input.txt', 'r+', ((err, fd) => {
    if (err) console.log(err.stack);
    console.log('File opened successfully!');
}));

//file stats
console.log('Going to get file stats');
fs.stat('input.txt', ((err, stats) => {
    if (err) return console.log(err.stack);
    console.log(stats);
    console.log('Got file stats successfully!');

    console.log('input.txt is file? ', stats.isFile());
    console.log('input.txt is directory? ', stats.isDirectory());
}));

//write to file
console.log('Going to write into exist file');
fs.writeFile('input.txt', 'Hello world!', (err => {
    if (err) return console.log(err.stack);
    console.log('Data written successfully');
    console.log('Read new data');

    fs.readFile('input.txt', ((err1, data1) => {
        if (err1) return console.log(err1.stack);
        console.log('Async data after reading: ', data1.toString());
    }));
}));