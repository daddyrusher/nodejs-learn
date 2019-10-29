console.log(__filename);
console.log(__dirname);

function printHello() {
    console.log("Hello world");
}
setTimeout(printHello, 2000);

const timeout = setTimeout(printHello, 3000);
clearTimeout(timeout);

//every 2 seconds print message or doing anything
setInterval(printHello, 2000);

console.log(process.config);


