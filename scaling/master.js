const fs = require('fs');
const child_process = require('child_process');

//exec process
/*for (let i = 0; i < 3; i++) {
    let workerProcess = child_process.exec('node support.js ' + i, (error, stdout, stderr) => {
       if (error) {
           console.log(error.stack);
           console.log('Error code: ' + error.code);
           console.log('Signal received: ' + error.signal);
       }

       console.log('stdout: ' + stdout);
       console.log('stderr: ' + stderr);
    });

    workerProcess.on('exit', (code) => {
        console.log('Child process exited with exit code ' + code);
    });
}*/

//spawn process
/*for (let i = 0; i < 3; i++) {
    let workerProcess = child_process.spawn('node', ['support.js', i]);

    workerProcess.stdout.on('data', (data) => {
        console.log('stdout ' + data);
    });

    workerProcess.stderr.on('data', (data) => {
        console.log('stderr ' + data);
    });

    workerProcess.on('close', (code) => {
        console.log('child process exited with code ' + code);
    });

}*/

//fork process

for (let i = 0; i < 3; i++) {
    let workerProcess = child_process.fork('support.js', [i]);

    workerProcess.on('close', (code) => {
        console.log('child process exited with code ' + code);
    });
}
