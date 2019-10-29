const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Got a GET request for the homepage');
    res.send('Hello GET');
});

app.post('/', (req, res) => {
    console.log('Got a POST request for homepage');
    res.send('Hello POST');
});

app.delete('/del_user', (req, res) => {
   console.log('Got a DELETE request for /del_user');
   res.send('Hello delete');
});

app.get('/list_user', (req, res) => {
    console.log('Got a GET request for /list_user');
    res.send('Page listing');
});

app.get('/ab*cd', (req, res) => {
    console.log('Got a GET request for /ab*cd');
    res.send('Page pattern match');
});

const server = app.listen(8081, () => {
    let host = server.address().host;
    let port = server.address().port;

    console.log('Server started at http://%s:%s', host, port);
});
