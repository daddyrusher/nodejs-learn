const http = require('http');
const options = {
    host: 'localhost',
    port: '8086',
    path: '/server/index.html'
};

const callback = (response) => {
    let body = '';
    //when data received
    response.on('data', (data) => {
        body += data;
    });

    //end response
    response.on('end', () => console.log(body));
};

const request = http.request(options, callback);
request.end();
