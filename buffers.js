//buffer - storage for binary data
/*const buf = new Buffer(10);
const buffer = new Buffer([10, 20, 30, 40, 50]);
const bufferEx = new Buffer('Simply Easy learning', 'utf-8');*/

//write to buffer
const bufferExample = new Buffer(256);
const len = bufferExample.write("hello world");
console.log('Octets written: ' + len);
//read from buffer
const readBuffer = new Buffer(26);
for (let i = 0; i < 26; i++) {
    readBuffer[i] = i + 97;
}

console.log(readBuffer.toString('ascii'));
console.log(readBuffer.toString('ascii', 0, 5));
console.log(readBuffer.toString('utf8', 0, 5));
console.log(readBuffer.toString(undefined, 0, 5));

//convert buffer to JSON
const JsonBuffer = new Buffer('Hello world');
const json = JsonBuffer.toJSON();
console.log(json);

//concatenate buffers
const buf1 = new Buffer('Privetik ');
const buf2 = new Buffer('Zdarova');
const buf3 = Buffer.concat([buf1, buf2]);

console.log('Buffer3 content: ' + buf3.toString());

//compate buffers

const compareBuffer1 = new Buffer('kek');
const compareBuffer2 = new Buffer('lol');
const result = compareBuffer1.compare(compareBuffer2);

console.log(result);

if (result < 0) {
    console.log(compareBuffer1 + ' comes before ' + compareBuffer2);
} else if (result === 0) {
    console.log(compareBuffer1 + ' is same as ' + compareBuffer2);
} else {
    console.log(compareBuffer1 + ' comes after ' + compareBuffer2);
}

//copy buffer
const copyBuffer = new Buffer('hahaha');
const copyBuffer2 = new Buffer(3);
copyBuffer.copy(copyBuffer2);
console.log('copyBuffer2 content: ' + copyBuffer2.toString());

//slicing
const sliceBuffer = new Buffer('Hello world');
const sliceBuffer2 = sliceBuffer.slice(0, 5);
console.log('sliceBuffer2 content: ' + sliceBuffer2.toString());

//buffer length
const bufferLength = new Buffer('bufferSize');
console.log('Buffer size is ' + bufferLength.length);

