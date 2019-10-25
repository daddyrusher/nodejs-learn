/*
* 4 types of streams in Node
* Readable
* Writable
* Duplex
* Transform
* Each type of Stream is an EventEmitter instance
* */


const fs = require('fs');

/*let data = '';

//reading from stream
const readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('utf8');

readerStream.on('data', chunk => data += chunk);
readerStream.on('end', () => console.log(data));
readerStream.on('error', err => console.log(err.stack));

console.log('Program ended');*/

//writing to stream
/*const input = '\nHello world';
const writerStream = fs.createWriteStream('input.txt');
writerStream.write(input, 'utf8');
writerStream.end();

writerStream.on('finish', () => console.log('Write completed'));
writerStream.on('error', err => console.log(err.stack));

console.log('Program ended');*/

//piping streams
/*const fileReaderStream = fs.createReadStream('input.txt');
const fileWriterStream = fs.createWriteStream('output.txt');
fileReaderStream.pipe(fileWriterStream);
console.log('Program ended');*/

//chaining streams
const zlib = require('zlib');
//compressing file
/*fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));*/

console.log('Program ended');
//decompressing file
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('unzipped.txt'));

console.log('Program ended');

